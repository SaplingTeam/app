import { BigNumber } from '@ethersproject/bignumber'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { NextPage } from 'next'
import Head from 'next/head'
import {
    FormEventHandler,
    Fragment,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'
import {
    APP_NAME,
    useAccount,
    getAddress,
    prefix,
    useProvider,
    BORROWER_SERVICE_URL,
    TOKEN_SYMBOL,
    rgbGreen,
    thirtyDays,
    oneDay,
    amountWithInterest,
} from '../../app'
import {
    Alert,
    AmountInput,
    BackToPools,
    Box,
    Button,
    EtherscanAddress,
    ExitAlert,
    formatDurationInMonths,
    Loans,
    Modal,
    Page,
    PageLoading,
    Tabs,
    useAmountForm,
} from '../../components'
import {
    getBatchProviderAndLoanDeskContract,
    LoanApplicationStatus,
    loanDeskContract,
    Pool,
    refetchStatsIfUsed,
    trackTransaction,
    useManagerInfo,
    useStatsState,
} from '../../features'
import { useDispatch, useSelector } from '../../store'
import { Oval } from 'react-loading-icons'

const title = `Earn - ${APP_NAME}`

const Manage: NextPage<{ address: string }> = ({ address }) => {
    const pool = useSelector((s) => s.pools[address])
    const account = useAccount()

    const head = (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={`${prefix}/favicon.svg`} />
        </Head>
    )

    if (!pool) return <PageLoading>{head}</PageLoading>

    return (
        <Page>
            {head}

            <BackToPools href="/manage" />
            <h1>{pool.name}</h1>
            {pool ? (
                pool.managerAddress === account ? (
                    <>
                        <StakeAndUnstake pool={pool} poolAddress={address} />
                        <LoansAwaitingApproval pool={pool} />
                        <Loans pool={pool} poolAddress={address} />
                    </>
                ) : (
                    <h3>Login with manager wallet</h3>
                )
            ) : (
                <h3>Loading…</h3>
            )}
        </Page>
    )
}

Manage.getInitialProps = (context) => {
    return { address: getAddress(context.query.address as string) }
}

export default Manage

const types = ['Stake', 'Unstake'] as const
function StakeAndUnstake({
    pool: { managerAddress, liquidityTokenAddress, liquidityTokenDecimals },
    poolAddress,
}: {
    pool: Pool
    poolAddress: string
}) {
    const [type, setType] = useState<typeof types[number]>('Stake')

    const account = useAccount()

    const [stats] = useStatsState(poolAddress)
    const [info, refetchManagerInfo] = useManagerInfo(poolAddress)

    const max = useMemo(() => {
        if (type === 'Stake') return undefined

        if (info) return BigNumber.from(info.unstakable)

        return undefined
    }, [type, info])

    const isNotManager = managerAddress !== account

    const { form, value } = useAmountForm({
        type,
        onSumbit:
            type === 'Stake'
                ? (contract, amount) =>
                      contract.stake(parseUnits(amount, liquidityTokenDecimals))
                : (contract, amount) =>
                      contract.unstake(
                          parseUnits(amount, liquidityTokenDecimals),
                      ),
        refetch: () =>
            Promise.all([
                refetchManagerInfo(),
                refetchStatsIfUsed(poolAddress),
            ]),
        poolAddress,
        liquidityTokenAddress,
        liquidityTokenDecimals,
        disabled: Boolean(isNotManager),
        max,
    })

    return (
        <Box
            loading={Boolean(type === 'Unstake' && account ? !info : false)}
            overlay={isNotManager ? 'Only manager can stake' : undefined}
        >
            <Tabs tabs={types} currentTab={type} setCurrentTab={setType}></Tabs>

            {form}

            {type === 'Stake' ? (
                <Alert
                    style="warning-filled"
                    title="You should not stake unless you are prepared to sustain a total loss of the money you have invested plus any commission or other transaction charges"
                />
            ) : (
                <ExitAlert
                    value={value}
                    verb="unstaking"
                    feePercent={stats ? stats.exitFeePercent : 0}
                />
            )}
        </Box>
    )
}

interface BaseLoanRequest {
    id: string
    borrower: string
    amount: BigNumber // Will never change
    duration: BigNumber // Will never change
    name: string
    businessName: string
    status: LoanApplicationStatus
    phone?: string
    email?: string
}
interface OfferValues {
    amount: BigNumber
    duration: BigNumber
    graceDefaultPeriod: number
    installmentAmount: BigNumber
    installments: number
    interest: number
}

type LoanRequest =
    | (BaseLoanRequest & {
          status: LoanApplicationStatus.APPLIED
      })
    | (BaseLoanRequest & {
          status: LoanApplicationStatus.DENIED
      })
    | (BaseLoanRequest &
          OfferValues & {
              status: LoanApplicationStatus.OFFER_MADE
          })
    | (BaseLoanRequest &
          OfferValues & {
              status: LoanApplicationStatus.OFFER_CANCELLED
          })
    | (BaseLoanRequest &
          OfferValues & {
              status: LoanApplicationStatus.OFFER_ACCEPTED
          })
function LoansAwaitingApproval({
    pool: { loanDeskAddress, liquidityTokenDecimals, block },
}: {
    pool: Pool
}) {
    const dispatch = useDispatch()
    const provider = useProvider()
    const [requests, setRequests] = useState<LoanRequest[] | null>(null)
    useEffect(() => {
        let canceled = false

        const contract = loanDeskContract
            .attach(loanDeskAddress)
            .connect(provider!)

        contract
            .queryFilter(contract.filters.LoanRequested(), block)
            .then((events) => {
                if (canceled) return []

                const { contract: attached } =
                    getBatchProviderAndLoanDeskContract(events.length, contract)

                return Promise.all(
                    events.map(({ data }) => attached.loanApplications(data)),
                )
            })
            .then((requests) => {
                if (canceled) return []

                return Promise.allSettled(
                    requests
                        .filter(
                            (request) =>
                                request.status ===
                                    LoanApplicationStatus.APPLIED ||
                                request.status ===
                                    LoanApplicationStatus.OFFER_MADE,
                        )
                        .map((request) =>
                            Promise.all([
                                fetch(
                                    `${BORROWER_SERVICE_URL}/profile/${request.profileId}`,
                                ).then((response) => response.json()),
                                request.status ===
                                LoanApplicationStatus.OFFER_MADE
                                    ? contract
                                          .loanOffers(request.id)
                                          .then((offer) => ({
                                              graceDefaultPeriod:
                                                  offer.gracePeriod.toNumber(),
                                              installmentAmount:
                                                  offer.installmentAmount,
                                              installments: offer.installments,
                                              interest: offer.apr,
                                              amount: offer.amount,
                                              duration: offer.duration,
                                          }))
                                    : undefined,
                            ]).then(
                                ([info, offer]: [
                                    {
                                        name: string
                                        businessName: string
                                        phone?: string
                                        email?: string
                                    },
                                    OfferValues | undefined,
                                ]) =>
                                    ({
                                        ...info,
                                        ...request,
                                        ...offer,
                                        id: request.id.toHexString(),
                                    } as LoanRequest),
                            ),
                        ),
                )
            })
            .then((results) => {
                if (canceled) return

                setRequests(
                    results
                        .filter((result) => result.status === 'fulfilled')
                        .map(
                            (result) =>
                                (result as PromiseFulfilledResult<LoanRequest>)
                                    .value,
                        ),
                )
            })
            .catch((error) => {
                console.error(error)
            })

        return () => {
            canceled = true

            setRequests(null)
        }
    }, [block, loanDeskAddress, provider])

    const [offerModalRequest, setOfferModalRequest] =
        useState<LoanRequest | null>(null)

    return (
        <>
            <Box>
                <h2>Loans awaiting approval</h2>
                <div className={requests === null ? undefined : 'grid'}>
                    {requests ? (
                        mapLoanRequest(
                            requests.filter(
                                (request) =>
                                    request.status ===
                                    LoanApplicationStatus.APPLIED,
                            ),
                            setOfferModalRequest,
                            liquidityTokenDecimals,
                        )
                    ) : (
                        <div className="loading">
                            <Oval
                                speed={0.7}
                                stroke={rgbGreen}
                                width={32}
                                height={32}
                            />
                        </div>
                    )}
                </div>
            </Box>

            <Box>
                <h2>Active offers</h2>
                <div className={requests === null ? undefined : 'grid'}>
                    {requests ? (
                        mapLoanRequest(
                            requests.filter(
                                (request) =>
                                    request.status ===
                                    LoanApplicationStatus.OFFER_MADE,
                            ),
                            setOfferModalRequest,
                            liquidityTokenDecimals,
                        )
                    ) : (
                        <div className="loading">
                            <Oval
                                speed={0.7}
                                stroke={rgbGreen}
                                width={32}
                                height={32}
                            />
                        </div>
                    )}
                </div>
            </Box>
            {offerModalRequest ? (
                <OfferModal
                    loan={offerModalRequest}
                    liquidityTokenDecimals={liquidityTokenDecimals}
                    onClose={() => setOfferModalRequest(null)}
                    onOffer={(
                        amount,
                        duration,
                        installmentAmount,
                        installments,
                        interest,
                        graceDefaultPeriod,
                    ) => {
                        const contract = loanDeskContract
                            .attach(loanDeskAddress)
                            .connect(provider!.getSigner())

                        const isOfferActive =
                            offerModalRequest.status ===
                            LoanApplicationStatus.OFFER_MADE

                        return (
                            isOfferActive
                                ? contract
                                      .updateOffer(
                                          offerModalRequest.id,
                                          amount,
                                          duration,
                                          graceDefaultPeriod,
                                          installmentAmount,
                                          installments,
                                          interest,
                                      )
                                      .then((tx) => ({
                                          tx,
                                          name: 'Update offer',
                                      }))
                                : contract
                                      .offerLoan(
                                          offerModalRequest.id,
                                          amount,
                                          duration,
                                          graceDefaultPeriod,
                                          installmentAmount,
                                          installments,
                                          interest,
                                      )
                                      .then((tx) => ({
                                          tx,
                                          name: `Offer a loan for ${formatUnits(
                                              amount,
                                              liquidityTokenDecimals,
                                          )} ${TOKEN_SYMBOL}`,
                                      }))
                        )
                            .then(({ tx, name }) =>
                                trackTransaction(dispatch, { name, tx }),
                            )
                            .then(() => {
                                setOfferModalRequest(null)
                                setRequests(
                                    requests!.map((loan) =>
                                        loan === offerModalRequest
                                            ? {
                                                  ...loan,
                                                  status: LoanApplicationStatus.OFFER_MADE,
                                                  amount,
                                                  duration,
                                                  graceDefaultPeriod,
                                                  installmentAmount,
                                                  installments,
                                                  interest,
                                              }
                                            : loan,
                                    ),
                                )
                            })
                            .catch((error) => {
                                console.error(error)
                                throw error
                            })
                    }}
                    onReject={() => {
                        const contract = loanDeskContract
                            .attach(loanDeskAddress)
                            .connect(provider!.getSigner())

                        const isOfferActive =
                            offerModalRequest.status ===
                            LoanApplicationStatus.OFFER_MADE

                        return (
                            isOfferActive
                                ? contract
                                      .cancelLoan(offerModalRequest.id)
                                      .then((tx) => ({
                                          tx,
                                          name: 'Cancel loan',
                                          newStatus:
                                              LoanApplicationStatus.OFFER_CANCELLED,
                                      }))
                                : contract
                                      .denyLoan(offerModalRequest.id)
                                      .then((tx) => ({
                                          tx,
                                          name: 'Reject loan',
                                          newStatus:
                                              LoanApplicationStatus.DENIED,
                                      }))
                        )
                            .then(({ tx, name, newStatus }) =>
                                trackTransaction(dispatch, { name, tx }).then(
                                    () => newStatus,
                                ),
                            )
                            .then((newStatus) => {
                                setOfferModalRequest(null)
                                setRequests(
                                    requests!.map((loan) =>
                                        loan === offerModalRequest
                                            ? {
                                                  ...loan,
                                                  status: newStatus as any,
                                              }
                                            : loan,
                                    ),
                                )
                            })
                            .catch((error) => {
                                console.error(error)
                                throw error
                            })
                    }}
                />
            ) : null}

            <style jsx>{`
                h2 {
                    font-size: 16px;
                    margin-top: 0;
                }

                .loading {
                    > :global(svg) {
                        display: block;
                        margin: 10px auto 0;
                    }
                }

                .grid {
                    display: grid;
                    grid-template-columns: 30% 50% 20%;
                    > :global(.name) {
                        > :global(span) {
                            color: ${rgbGreen};
                            cursor: pointer;
                        }
                    }
                }
            `}</style>
        </>
    )
}

function mapLoanRequest(
    loans: LoanRequest[],
    setOfferModalRequest: (loan: LoanRequest) => void,
    liquidityTokenDecimals: number,
) {
    return loans.map((loan) => (
        <Fragment key={loan.id}>
            <div className="name">
                <span onClick={() => setOfferModalRequest(loan)}>
                    {loan.name}
                </span>
            </div>
            <div className="description">
                <span>
                    {formatUnits(loan.amount, liquidityTokenDecimals)}{' '}
                    {TOKEN_SYMBOL} for{' '}
                    {formatDurationInMonths(loan.duration.toNumber())} months
                </span>
            </div>
            <div className="address">
                <EtherscanAddress address={loan.borrower} />
            </div>
        </Fragment>
    ))
}

const initialInterest = 35
const initialInterestString = initialInterest.toString()
function OfferModal({
    loan,
    onClose,
    liquidityTokenDecimals,
    onOffer,
    onReject,
}: {
    loan: LoanRequest
    liquidityTokenDecimals: number
    onClose(): void
    onOffer(
        amount: BigNumber,
        duration: BigNumber,
        installmentAmount: BigNumber,
        installments: number,
        interest: number,
        graceDefaultPeriod: number,
    ): Promise<void | object>
    onReject(): Promise<void>
}) {
    const isOfferActive = loan.status === LoanApplicationStatus.OFFER_MADE

    const {
        initialAmount,
        initialMonths,
        initialInstallmentAmount,
        initialInterestValue,
        initialGraceDefaultPeriod,
    } = useMemo(() => {
        const initialAmount = formatUnits(loan.amount, liquidityTokenDecimals)
        const duration = loan.duration.toNumber()
        const initialMonths = formatDurationInMonths(duration)

        if (isOfferActive) {
            return {
                initialAmount,
                initialMonths: initialMonths.toString(),
                initialInstallmentAmount: formatUnits(
                    loan.installmentAmount,
                    liquidityTokenDecimals,
                ),
                initialInterestValue: (loan.interest / 10).toString(),
                initialGraceDefaultPeriod: (
                    loan.graceDefaultPeriod / oneDay
                ).toString(),
            }
        }

        return {
            initialAmount,
            initialMonths: initialMonths.toString(),
            initialInstallmentAmount: formatUnits(
                amountWithInterest(
                    loan.amount,
                    Math.trunc(Date.now() / 1000) - duration,
                    initialInterest,
                )
                    .mul(100)
                    .div(Math.trunc(initialMonths))
                    .div(100),
                liquidityTokenDecimals,
            ),
            initialInterestValue: initialInterestString,
            initialGraceDefaultPeriod: '35',
        }
    }, [isOfferActive, liquidityTokenDecimals, loan])
    const [amount, setAmount] = useState(initialAmount)
    const [duration, setDuration] = useState(initialMonths)
    const [installmentAmount, setInstallmentAmount] = useState(
        initialInstallmentAmount,
    )
    const [interest, setInterest] = useState(initialInterestValue)
    const [graceDefaultPeriod, setGraceDefaultPeriod] = useState(
        initialGraceDefaultPeriod,
    )

    const [isOfferLoading, setIsOfferLoading] = useState(false)
    const [isRejectLoading, setIsRejectLoading] = useState(false)

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault()
            setIsOfferLoading(true)
            onOffer(
                parseUnits(amount, liquidityTokenDecimals),
                BigNumber.from(Number(duration) * thirtyDays),
                parseUnits(installmentAmount, liquidityTokenDecimals),
                parseInt(duration, 10),
                Number(interest) * 10,
                Number(graceDefaultPeriod) * oneDay,
            ).catch(() => {
                setIsOfferLoading(false)
            })
        },
        [
            amount,
            duration,
            graceDefaultPeriod,
            installmentAmount,
            interest,
            liquidityTokenDecimals,
            onOffer,
        ],
    )

    const handleReject = useCallback(() => {
        setIsRejectLoading(true)
        onReject().catch(() => {
            setIsRejectLoading(false)
        })
    }, [onReject])

    return (
        <Modal onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <h3>{isOfferActive ? 'Update Offer' : 'Offer a Loan'}</h3>

                <div className="field">
                    <div className="label">Account</div>
                    <div>
                        <EtherscanAddress address={loan.borrower} />
                    </div>
                </div>
                <div className="field">
                    <div className="label">Name</div>
                    <div>{loan.name}</div>
                </div>
                <div className="field">
                    <div className="label">Business Name</div>
                    <div>{loan.businessName}</div>
                </div>
                {loan.phone ? (
                    <div className="field">
                        <div className="label">Phone</div>
                        <div>
                            <a href={`tel:${loan.phone}`}>{loan.phone}</a>
                        </div>
                    </div>
                ) : null}
                {loan.email ? (
                    <div className="field">
                        <div className="label">Email</div>
                        <div>
                            <a href={`mailto:${loan.email}`}>{loan.email}</a>
                        </div>
                    </div>
                ) : null}
                <label>
                    <div className="label">Amount</div>
                    <AmountInput
                        decimals={liquidityTokenDecimals}
                        value={amount}
                        onChange={setAmount}
                        // disabled={disabled}
                        // onBlur={() =>
                        //     !checkAmountValidity(
                        //         amount,
                        //         liquidityTokenDecimals,
                        //         borrowInfo!.minLoanAmount,
                        //     ) && setDisplayAlert(true)
                        // }
                        // onKeyDown={(event) =>
                        //     event.key === 'Enter'
                        //         ? !checkAmountValidity(
                        //               amount,
                        //               liquidityTokenDecimals,
                        //               borrowInfo!.minLoanAmount,
                        //           ) && setDisplayAlert(true)
                        //         : undefined
                        // }
                    />
                </label>
                <label>
                    <div className="label">Duration</div>
                    <AmountInput
                        decimals={0}
                        value={duration}
                        onChange={setDuration}
                        // onBlur={showDisplayAlert}
                        // disabled={disabled}
                        noToken
                        label="months"
                        paddingRight={60}
                        // onKeyDown={(event) =>
                        //     event.key === 'Enter'
                        //         ? setDisplayAlert(true)
                        //         : undefined
                        // }
                    />
                </label>
                <label>
                    <div className="label">Interest p/a</div>
                    <AmountInput
                        decimals={1}
                        value={interest}
                        onChange={setInterest}
                        // onBlur={showDisplayAlert}
                        // disabled={disabled}
                        noToken
                        label="%"
                        paddingRight={26}
                        // onKeyDown={(event) =>
                        //     event.key === 'Enter'
                        //         ? setDisplayAlert(true)
                        //         : undefined
                        // }
                    />
                </label>
                <label>
                    <div className="label">Installment amount</div>
                    <AmountInput
                        decimals={liquidityTokenDecimals}
                        value={installmentAmount}
                        onChange={setInstallmentAmount}
                        // onBlur={showDisplayAlert}
                        // disabled={disabled}
                        // onKeyDown={(event) =>
                        //     event.key === 'Enter'
                        //         ? setDisplayAlert(true)
                        //         : undefined
                        // }
                    />
                </label>
                <label>
                    <div className="label">Grace Default Period</div>
                    <AmountInput
                        decimals={2}
                        value={graceDefaultPeriod}
                        onChange={setGraceDefaultPeriod}
                        // onBlur={showDisplayAlert}
                        // disabled={disabled}
                        noToken
                        label="days"
                        paddingRight={44}
                        // onKeyDown={(event) =>
                        //     event.key === 'Enter'
                        //         ? setDisplayAlert(true)
                        //         : undefined
                        // }
                    />
                </label>

                {/* {displayAlert && alert ? (
            <div className="alert-positioner">
                <Alert style="error-filled" title={alert} />
            </div>
        ) : null} */}

                <div className="buttons">
                    <Button
                        disabled={isOfferLoading || isRejectLoading}
                        loading={isOfferLoading}
                        type="submit"
                    >
                        {isOfferActive ? 'Update Offer' : 'Offer Loan'}
                    </Button>
                    <Button
                        disabled={isOfferLoading || isRejectLoading}
                        loading={isRejectLoading}
                        onClick={handleReject}
                        type="button"
                        stone
                    >
                        {isOfferActive ? 'Cancel Offer' : 'Reject Application'}
                    </Button>
                </div>
                {/* Disabled elements prevent any click events to be fired resulting in inputs not being blurred */}
                {/* {account && disabledSubmit ? (
                        <div className="clickable" onClick={showDisplayAlert} />
                    ) : null} */}

                <style jsx>{`
                    form {
                        padding: 20px;

                        > h3 {
                            margin-top: 0;
                        }

                        > .field,
                        > label {
                            display: block;
                            margin-top: 16px;

                            > .label {
                                color: var(--color-secondary);
                                font-weight: 400;
                                margin-bottom: 8px;
                            }
                        }

                        > .buttons {
                            display: flex;

                            > :global(button) {
                                margin: 16px 8px 0 0;
                            }
                        }
                    }
                `}</style>
            </form>
        </Modal>
    )
}
