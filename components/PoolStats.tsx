import { EtherscanLink } from './EtherscanLink'
import { Pool, useStats } from '../features'
import { Box } from './Box'
import { formatFloor, prefix, rgbTextPrimary, rgbTextSecondary } from '../app'

export function PoolStats({
    pool: { managerAddress, tokenDecimals },
    poolAddress,
}: {
    pool: Pool
    poolAddress: string
}) {
    const stats = useStats(poolAddress, tokenDecimals)

    return (
        <Box>
            <style jsx>{`
                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    > h3 {
                        margin: 0;
                        font-weight: 400;
                        font-size: 18px;
                    }

                    > .manager {
                        display: none;
                        font-size: 13px;
                        > .label {
                            color: ${rgbTextSecondary};
                            margin-right: 4px;
                        }
                    }
                }
                .subtitle {
                    color: ${rgbTextSecondary};
                    font-size: 14px;
                    margin: 4px 0 20px;
                    display: flex;
                    align-items: center;

                    > img {
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                }
                .stats {
                    display: flex;
                    flex-wrap: wrap;

                    > .stat {
                        flex-basis: 50%;
                        > .number {
                            color: ${rgbTextPrimary};
                        }

                        > .label {
                            color: ${rgbTextSecondary};
                            font-size: 11.6px;
                        }
                    }

                    &.small {
                        > .stat {
                            margin-bottom: 10px;

                            > .number {
                                font-size: 18px;
                            }
                        }
                    }
                    &.large {
                        > .stat {
                            > .number {
                                font-size: 24px;
                            }
                        }
                    }
                }

                @media screen and (min-width: 420px) {
                    .title > .manager {
                        display: block;
                    }
                }

                @media screen and (min-width: 760px) {
                    .stats {
                        > .stat {
                            flex-basis: auto;
                        }
                        &.small {
                            justify-content: center;
                            > .stat {
                                margin-left: 15px;
                                margin-right: 15px;
                            }
                        }
                        &.large {
                            justify-content: center;
                            > .stat {
                                width: 120px;
                            }
                        }
                    }
                }
            `}</style>
            <div className="title">
                <h3>Pool Status</h3>
                <div className="manager">
                    <span className="label">Pool Manager</span>
                    {managerAddress && (
                        <EtherscanLink address={managerAddress} primary />
                    )}
                </div>
            </div>
            <div className="subtitle">
                <img src={`${prefix}/usdc.svg`} alt="USDC logo" />
                USDC
            </div>
            <div className="stats small">
                <div className="stat">
                    <div className="number">
                        ${formatFloor(stats?.totalPoolSize || '0')}
                    </div>
                    <div className="label">Total Pool Size</div>
                </div>
                <div className="stat">
                    <div className="number">
                        ${formatFloor(stats?.loansOutstanding || '0')}
                    </div>
                    <div className="label">Loans Outstanding</div>
                </div>
                <div className="stat">
                    <div className="number">
                        ${formatFloor(stats?.managerFunds || '0')}
                    </div>
                    <div className="label">Manager Funds</div>
                </div>
                <div className="stat">
                    <div className="number">
                        ${formatFloor(stats?.maxPoolSize || '0')}
                    </div>
                    <div className="label">Max Pool Size</div>
                </div>
                <div className="stat">
                    <div className="number">{stats?.loans || '0'}</div>
                    <div className="label">Loans</div>
                </div>
            </div>
            <div className="stats large">
                <div className="stat">
                    <div className="number">0%</div>
                    <div className="label">Projected APY</div>
                </div>
                <div className="stat">
                    <div className="number">
                        ${formatFloor(stats?.availableForDeposits || '0')}
                    </div>
                    <div className="label">Available for deposits</div>
                </div>
            </div>
        </Box>
    )
}