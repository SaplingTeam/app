import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { Contract, ContractTransaction, Event } from '@ethersproject/contracts'
import {
    provider,
    CustomBatchProvider,
    ContractFunction,
    CustomBaseContract,
    EventFilterFactory,
    EventFilterWithType,
    TupleToObject,
    TupleToObjectWithPropNames,
    nullAddress,
} from '../../app'
import abi from './abi.json'

type TypedEvent<
    T extends readonly unknown[],
    K extends Record<keyof TupleToObject<T>, PropertyKey>,
> = Omit<Event, 'args'> & { args: TupleToObjectWithPropNames<T, K> }

export const loanRequestedSignature = 'LoanRequested(uint256,address)'

export interface CoreContract
    extends Omit<
        CustomBaseContract,
        'filters' | 'connect' | 'attach' | 'queryFilter' | 'on'
    > {
    connect(...args: Parameters<CustomBaseContract['connect']>): this
    attach(...args: Parameters<CustomBaseContract['attach']>): this

    manager: ContractFunction<string>
    token: ContractFunction<string>
    loansCount: ContractFunction<BigNumber>
    balanceStaked: ContractFunction<BigNumber>
    balanceOf: ContractFunction<BigNumber, [account: string]>
    stake: ContractFunction<ContractTransaction, [amount: BigNumber]>
    unstake: ContractFunction<ContractTransaction, [amount: BigNumber]>
    deposit: ContractFunction<ContractTransaction, [amount: BigNumber]>
    withdraw: ContractFunction<ContractTransaction, [amount: BigNumber]>
    amountDepositable: ContractFunction<BigNumber>
    amountUnstakable: ContractFunction<BigNumber>
    amountWithdrawable: ContractFunction<BigNumber, [account: string]>
    requestLoan: ContractFunction<
        ContractTransaction,
        [amount: BigNumber, loanDuration: BigNumber]
    >
    cancelLoan: ContractFunction<ContractTransaction, [loanId: BigNumberish]>
    borrow: ContractFunction<ContractTransaction, [loanId: BigNumberish]>
    repay: ContractFunction<
        ContractTransaction,
        [loanId: BigNumber, amount: BigNumber]
    >
    approveLoan: ContractFunction<ContractTransaction, [loanId: BigNumberish]>
    denyLoan: ContractFunction<ContractTransaction, [loandId: BigNumberish]>
    defaultLoan: ContractFunction<ContractTransaction, [loanId: BigNumberish]>
    canDefault: ContractFunction<
        boolean,
        [loanId: BigNumberish, account: string]
    >

    loans: ContractFunction<EVMLoan, [loanId: BigNumberish]>
    loanDetails: ContractFunction<EVMLoanDetails, [loanId: BigNumberish]>

    poolFunds: ContractFunction<BigNumber>
    poolLiquidity: ContractFunction<BigNumber>
    currentLenderAPY: ContractFunction<number>

    templateLoanAPR: ContractFunction<number>
    maxLoanDuration: ContractFunction<BigNumber>
    minLoanAmount: ContractFunction<BigNumber>
    minLoanDuration: ContractFunction<BigNumber>

    protocolEarningsOf: ContractFunction<BigNumber, [account: string]>
    withdrawProtocolEarnings: ContractFunction<ContractTransaction>

    isValidLender: ContractFunction<boolean, [account: string]>
    isValidBorrower: ContractFunction<boolean, [account: string]>

    earlyExitDeadlines: ContractFunction<BigNumber, [account: string]>
    exitFeePercent: ContractFunction<BigNumber>

    filters: {
        /**
         * ```solidity
         * event LoanRequested(uint256 loanId, address borrower)
         * ```
         */
        LoanRequested: EventFilterFactory<
            [loanId: BigNumber, borrower: string],
            ['loanId', 'borrower']
        >

        /**
         * ```solidity
         * event LoanApproved(uint256 loanId, address borrower)
         * ```
         */
        LoanApproved: EventFilterFactory<
            [loanId: BigNumber, borrower: string],
            ['loanId', 'borrower']
        >

        /**
         * ```solidity
         * event LoanDenied(uint256 loanId, address borrower)
         * ```
         */
        LoanDenied: EventFilterFactory<
            [loanId: BigNumber, borrower: string],
            ['loanId', 'borrower']
        >

        /**
         * ```solidity
         * event LoanCancelled(uint256 loanId, address borrower)
         * ```
         */
        LoanCancelled: EventFilterFactory<
            [loanId: BigNumber, borrower: string],
            ['loanId', 'borrower']
        >

        /**
         * ```solidity
         * event LoanRepaid(uint256 loanId, address borrower)
         * ```
         */
        LoanRepaid: EventFilterFactory<
            [loanId: BigNumber, borrower: string],
            ['loanId', 'borrower']
        >

        /**
         * ```solidity
         * event LoanDefaulted(uint256 loanId, address borrower, uint256 amountLost)
         * ```
         */
        LoanDefaulted: EventFilterFactory<
            [loanId: BigNumber, borrower: string, amountLost: BigNumber],
            ['loanId', 'borrower', 'amountLost']
        >
    }

    on<
        T extends readonly unknown[],
        K extends Record<keyof TupleToObject<T>, PropertyKey>,
    >(
        filter: EventFilterWithType<T, K>,
        callback: (...args: [...T, TypedEvent<T, K>]) => void,
    ): true

    queryFilter<
        T extends readonly unknown[],
        K extends Record<keyof TupleToObject<T>, PropertyKey>,
    >(
        filter: EventFilterWithType<T, K>,
    ): Promise<TypedEvent<T, K>[]>
}

export const contract = new Contract(
    nullAddress,
    abi,
    provider,
) as unknown as CoreContract

export interface EVMLoan {
    id: BigNumber
    status: LoanStatus
    borrower: string
    amount: BigNumber
    duration: BigNumber
    requestedTime: BigNumber
    lateAPRDelta: number
    apr: number
}

export interface EVMLoanDetails {
    loanId: BigNumber
    totalAmountRepaid: BigNumber
    baseAmountRepaid: BigNumber
    interestPaid: BigNumber
    approvedTime: BigNumber
    lastPaymentTime: BigNumber
}

export enum LoanStatus {
    APPLIED,
    DENIED,
    APPROVED,
    CANCELLED,
    FUNDS_WITHDRAWN,
    REPAID,
    DEFAULTED,
}

export function formatStatus(status: LoanStatus) {
    switch (status) {
        case LoanStatus.APPLIED:
            return 'Waiting for approval'
        case LoanStatus.APPROVED:
            return 'Approved'
        case LoanStatus.DENIED:
            return 'Rejected'
        case LoanStatus.CANCELLED:
            return 'Canceled'
        case LoanStatus.DEFAULTED:
            return 'Defaulted'
        case LoanStatus.FUNDS_WITHDRAWN:
            return 'Withdrawn'
        case LoanStatus.REPAID:
            return 'Repaid'
    }
}

export function getBatchProviderAndContract(
    count: number,
    contract: CoreContract,
) {
    const provider = new CustomBatchProvider(count)
    return {
        provider,
        contract: contract.connect(provider),
    }
}
