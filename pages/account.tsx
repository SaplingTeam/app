import type { NextPage } from 'next'
import Head from 'next/head'
import { APP_NAME, prefix, useAccount } from '../app'
import { Connect, Account, Page } from '../components'

const AccountPage: NextPage = () => {
    const account = useAccount()

    const title = `${account ? 'Connect wallet' : 'Account'} - ${APP_NAME}`

    return (
        <Page xl>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Connect your Ethereum wallet"
                />
                <link rel="icon" href={`${prefix}/favicon.svg`} />
            </Head>

            {account ? <Account /> : <Connect />}
        </Page>
    )
}

export default AccountPage
