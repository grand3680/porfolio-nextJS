import Head from "next/head";
import HomePage from '@/components/homePage/homePage';

const RootLayout = () => (
    <>
        <Head>
            <title>home</title>
        </Head>
        
        <HomePage/>
    </>

)


export default RootLayout;