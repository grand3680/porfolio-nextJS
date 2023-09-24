import variables from '@/styles/variables.module.scss';
import Head from 'next/head';

export default function Custom404() {
    return ( 
    <> 
        <Head>
            <title>404</title>
        </Head>
        <h1 style={{ color: variables.primaryColor }}>404</h1>
        <p>something wrong</p>
    </>)
}

