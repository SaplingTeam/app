import Image from 'next/image'
import { FaWallet } from 'react-icons/fa'
import { Button } from '.'
import { walletConnect } from '../app/connectors/walletconnect'
import { eip1193 } from '../app/connectors/eip1193'
import { useWeb3React } from '@web3-react/core'
import {
    APP_NAME,
    LOCAL_STORAGE_LAST_CONNECTOR_EIP1193,
    LOCAL_STORAGE_LAST_CONNECTOR_KEY,
    LOCAL_STORAGE_LAST_CONNECTOR_WALLETCONNECT,
    RPC_NETWORK_ID,
} from '../app'
import { useDispatch } from 'react-redux'
import { setLastConnectorName } from '../features/web3/web3Slice'

const prefix = process.env.NODE_ENV === 'production' ? '/interface' : ''

export function Connect() {
    const { isActivating } = useWeb3React()
    const dispatch = useDispatch()

    return (
        <>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 10px 0;

                    > h2 {
                        margin: 0 0 0 10px;
                    }
                }

                .wallet {
                    max-width: 300px;
                    margin: 20px auto;
                    border: 1px solid grey;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px 10px;
                    text-align: center;
                }
            `}</style>

            <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`${prefix}/optimism.svg`}
                    width={32}
                    height={32}
                    alt="Optimism"
                />
                <h2>{APP_NAME} runs on Optimism</h2>
            </header>

            <div className="wallet">
                <FaWallet size={32} />
                <h4>Connect to your browser wallet</h4>
                <Button
                    disabled={isActivating}
                    onClick={() => {
                        eip1193.activate().then(() => {
                            dispatch(
                                setLastConnectorName(
                                    LOCAL_STORAGE_LAST_CONNECTOR_EIP1193,
                                ),
                            )
                        })
                    }}
                >
                    Connect browser wallet
                </Button>
            </div>

            <div className="wallet">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`${prefix}/walletconnect.svg`}
                    width={32}
                    height={32}
                    alt="WalletConnect logo"
                />
                <h4>Scan with WalletConnect to connect</h4>
                <Button
                    disabled={isActivating}
                    onClick={() => {
                        walletConnect
                            .activate(RPC_NETWORK_ID)
                            .then(() => {
                                dispatch(
                                    setLastConnectorName(
                                        LOCAL_STORAGE_LAST_CONNECTOR_WALLETCONNECT,
                                    ),
                                )
                            })
                            .catch((error: any) => {
                                console.log(error)
                            })
                    }}
                >
                    Use WalletConnect
                </Button>
            </div>
        </>
    )
}
