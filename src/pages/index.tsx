import Head from "next/head";
import HomePage from '@/components/homePage/HomePage';
import RootIcon from '@/images/ava.png'
import { FC } from 'react';

const RootLayout : FC = () => {
    return <>
        <Head>
            <title>home</title>
            <link rel="icon" href={ RootIcon.src } sizes="any" />
        </Head>
        
        <HomePage/>
    </>
}


export default RootLayout;