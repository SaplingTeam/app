import { useEffect, useState } from 'react'

const kitaleDescription = (
    <>
        <p>
            The Kitale Community Pool lends to small businesses in the Kitale
            area of Uganda.
        </p>
        <p>
            The Pool Manager, Mr Ausicery Jean, has been lending successfully in
            his local community for over 8 years to help fund the Kitale
            Community School. He has an outstanding track record, experiencing
            zero defaults to date. The Pool Manager’s approach is facilitated by
            four key principles: (1) collateral taken for every loan, (2)
            affordable rates for borrowers, (3) clear and understandable
            business cases from each borrower, and (4) familiarity with
            borrowers based on long-term relationships.
        </p>
        <p>
            Prospective borrowers in the Kitale region have difficulty accessing
            capital from banks and microfinance firms. In the very few cases
            that these borrowers can access loans from banks, predominantly
            based in towns and cities far removed from the Kitale community, the
            rates offered are significantly higher than the rates available from
            the Kitale Community Pool. The aim of the pool is therefore to offer
            more affordable rates than available elsewhere in the region,
            meaning that the end borrower can retain and reinvest a greater
            amount of profit generated from their business.
        </p>
        <p>
            The Pool Manager selects the most promising businesses in the Kitale
            community based on their growth potential and their ability to
            facilitate job creation in the local area. Businesses selected to
            receive loans will have sound financial fundamentals, have
            demonstrated long term, sustainable performance or will be owned or
            managed by individuals with a strong commercial track record. The
            Pool Manager takes security and personal guarantees from the
            business owners, with the security normally comprising the deed of
            the business owner’s property.
        </p>
        <p>
            A significant proportion of loans issued by the Kitale Community
            Pool will be to agricultural businesses that require finance to
            irrigate, fertilise and insure their crops. Any loans to
            agricultural businesses will be issued with crop insurance if not
            already in place, so that in the event of a crop failure the
            outstanding debt will be repaid via the insurance policy.
        </p>
        <p>
            A proportion of the Pool Manager profits will be used to contribute
            to the running costs of the Kitale Community School.
        </p>
    </>
)

const ikiIkiPoolDescription = (
    <>
        <p>
            The Iki-Iki Farmers Pool lends to a co-operative of over 40 farmers from
            around the town of Iki-Iki in the Budaka region of Eastern Uganda, 20km
            from the city of Mbale. Budaka&apos;s economy is dominated by agriculture with
            the majority of farming activities undertaken by small holders who produce
            perennial and annual crops such as bananas, coffee, cotton, maize, sweet
            potatoes, tomatoes, beans, cassava and groundnuts.
        </p>

        <p>
            The farming cooperative that will benefit from the loans made from Iki-Iki
            Farmers Pool has been working together successfully for a number of years,
            pooling savings and harvests whilst benefiting from collective training and
            buying power. The Pool Manager will be Regina Nagudi, who has led the Iki-Iki
            Farmers collective for a number of years, and will be responsible for
            distributing loans and collecting repayments from members of the cooperative.
        </p>

        <p>
            Loans will be used to facilitate the growing of higher yield crops such as tomatoes.
            A pre-condition of the Pool issuing a loan will be that the farmer in question has
            purchased crop insurance or will use part of the loan to purchase crop insurance.
            By enabling the cooperative members to purchase crop insurance policies, Pool loans
            will allow the farmers to protect themselves against the downside risk of crop failure
            (the higher yield crops in question have a higher failure rate) whilst benefiting
            from the material upside of successful harvests.
        </p>

        <p>
            The Pool Manager&apos;s risk management approach is facilitated by three key principles:
            (1) crop insurance as a pre-requisite of loan issuance, (2) affordable rates for borrowers
            and (3) familiarity with borrowers based on long-term relationships.
        </p>

        <p>
            Prospective borrowers within the cooperative currently have difficulty accessing capital
            from banks and microfinance firms. The aim of the pool is therefore to increase financial
            inclusion in the area, generate higher crop yields and offer more affordable rates than
            available elsewhere in the region, meaning that the end borrower can retain and reinvest
            a greater amount of profit generated from their business.
        </p>
 </>
)

const namirembePoolDescription = (
    <>
        <p>
            The Namirembe Women&apos;s Pool is the first Sapling lending pool focussed exclusively on providing
            loans to small businesses owned and operated by women. The pool will lend to a group of 50 women in
            the Budaka region of Eastern Uganda who already operate a savings and loans cooperative in which
            they pool resources and provide credit to each other; the pool will be managed by Regina Nagudi who is
            already acting as the Pool Manager for the Iki-Iki Farmers&apos; Pool. The Namirembe Women&apos;s
            Pool will provide additional capital to the group to allow them to invest in and grow their existing
            businesses at an accelerated rate that they would otherwise be unable to achieve via their savings
            and loans cooperative. The businesses operated by the women in the group are all established and
            diverse in their nature, including retail shops, vegetable vendors, produce vendors and farms.
        </p>
    </>
)

const trainingPoolDescription = (
    <>
        <p>
            Training Pool for user training under live network conditions
        </p>
    </>
)

const testPoolDescription = (
    <>
        <p>
            Test Pool
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis, risus et vehicula tincidunt,
            mauris sem luctus felis, ut maximus nunc magna ac nunc. Maecenas vulputate, mauris a fringilla laoreet,
            dui ante iaculis augue, id convallis urna nibh quis orci. Vestibulum consectetur consectetur imperdiet.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nulla quam,
            pellentesque ac tortor sit amet, aliquam volutpat justo. Integer lacinia commodo velit, sed scelerisque urna
            dignissim eleifend. Vestibulum ornare, nisl vitae finibus consequat, felis ex venenatis ex, ac finibus nunc
            sapien ac velit. Duis imperdiet lacus ut suscipit accumsan. Nunc rhoncus elit magna, at posuere nibh lacinia
            non.
        </p>
        <p>
            Vestibulum orci erat, malesuada ut libero quis, placerat porta lorem. Cras dignissim ut sem eu tincidunt.
            Maecenas a pulvinar justo. Sed euismod mattis felis, vitae vulputate sem placerat in. Fusce molestie dictum
            nisl, ultricies vestibulum mauris imperdiet vel. Nam sodales non lectus nec auctor. Duis egestas in urna sit
            amet blandit. Suspendisse vehicula maximus tortor vel fringilla. Integer et pharetra est. Sed molestie
            ligula ac nibh lacinia ultricies. Aliquam erat volutpat. Aliquam at blandit dolor, vel pharetra lectus.
        </p>
    </>
)

const descriptions: Record<string, JSX.Element> = {
    // live pools
    '0xA3e07757131E5587ebB58ABB08de10783FC090Be': kitaleDescription,
    '0x70527768dB88924985460fCada217E2AEDb9a620': ikiIkiPoolDescription,
    '0x925A62Cd68f73111730AC0E99F8b116Ef767EE01': namirembePoolDescription,
    '0x24c6ec0283EbCe4703f4667880Dd8b048e48e850': trainingPoolDescription,

    // testnet pools
    '0x3Ade73672bE14F2C97e6d290bF01bE5969871273': testPoolDescription,
    '0xB2b978a45F4d07E0533f1Ef16837Be2e0D5F5E25': testPoolDescription,
}

let nextMountShowMoreState = false
export function PoolDescription({
    address,
    showMoreInNextMount,
}: {
    address: string
    showMoreInNextMount?: boolean
}) {
    const [showMore, setShowMore] = useState(nextMountShowMoreState)

    useEffect(() => {
        nextMountShowMoreState = false
    }, [])

    const description = descriptions[address]
    if (!description) return null

    return (
        <div>
            <style jsx>{`
                .text {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 23.04px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;

                    &.more {
                        -webkit-line-clamp: initial;

                        > :global(p) {
                            display: block;

                            &::after {
                                content: '';
                            }
                        }
                    }

                    > :global(p) {
                        display: inline;
                        margin-top: 0;

                        &::after {
                            content: ' ';
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                span {
                    margin-top: 8px;
                    color: var(--greenery);
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 19px;
                    display: inline-block;
                    cursor: pointer;
                }
            `}</style>
            <div className={`text ${showMore ? 'more' : ''}`}>
                {description}
            </div>
            <span
                onClick={(event) => {
                    if (showMoreInNextMount) {
                        nextMountShowMoreState = true
                    } else {
                        event.stopPropagation()
                        event.preventDefault()
                        setShowMore(!showMore)
                    }
                }}
            >
                {showMoreInNextMount
                    ? 'Go to pool to read more'
                    : showMore
                    ? 'Show less'
                    : 'Show more'}
            </span>
        </div>
    )
}
