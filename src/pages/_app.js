//import '../styles/globals.css';
import Layout from '@/components/Layout'
import Head  from 'next/head';
// import '../styles/body/_body.scss'

const porfolio = ({ Component, pageProps }) => (
    <Layout>
        <Head></Head>
        <Component {...pageProps} />        
    </Layout>
);

export default porfolio;