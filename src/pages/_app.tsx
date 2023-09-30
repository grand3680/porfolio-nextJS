import Layout from '@/components/Layout'
import Head  from 'next/head';
import '../styles/body/body.scss'
import '../styles/body/reset.scss'

import { AppProps } from 'next/app'
import { FC } from 'react';


const porfolio : FC<AppProps> = ({ Component, pageProps }) => {
    return <>
        <Layout>
                <Head>
                    {/* <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" /> */}
                </Head>
                <Component {...pageProps} />        
        </Layout>    
    </>
}

export default porfolio;