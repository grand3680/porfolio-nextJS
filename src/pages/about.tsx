import Head from "next/head";
import About from '@/components/aboutPage/About';
import { FC } from 'react';

const AboutPage : FC = () => {
    return (
    <>    
        <Head>
            <title>About</title>
        </Head>

        <About/>
    </>
    )
}


export default AboutPage;