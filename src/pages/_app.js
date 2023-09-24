//import '../styles/globals.css';
import Layout from '@/components/Layout'
import Head  from 'next/head';
import '../styles/body/body.scss'
import '../styles/body/reset.scss'

const porfolio = ({ Component, pageProps }) => (
    <Layout>
        <Head></Head>
        <Component {...pageProps} />        
    </Layout>
);

export default porfolio;