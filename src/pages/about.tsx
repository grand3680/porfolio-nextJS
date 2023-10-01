import Head from "next/head";
import About from '@/components/aboutPage/About';
import AboutIcon from '@/images/ava.png'
import { FC } from 'react';

const AboutPage : FC = () => {
    return (
    <>    
        <Head>
            <title>About</title>
            <link rel="icon" href={ AboutIcon.src } sizes="any" />            
        </Head>

        <About/>
    </>
    )
}


export default AboutPage;