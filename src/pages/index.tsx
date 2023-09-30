import Head from "next/head";
import HomePage from '@/components/homePage/HomePage';
import { FC } from 'react';

const RootLayout : FC = () => {
    return <>
        <Head>
            <title>home</title>
        </Head>
        
        <HomePage/>
    </>
}


export default RootLayout;