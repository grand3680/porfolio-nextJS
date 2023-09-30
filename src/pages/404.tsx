import style from '@/styles/404.module.scss';
import Head from 'next/head';
import image from '@/images/404.ico';
import { FC } from 'react';


const Custom404 : FC = () => {
    return ( 
        <> 
            <Head>
                <title>404</title>
                <link rel="icon" href={ image.toString() }/>
            </Head>

            <div className={style.Error_404}>
                <h1 className={style.Err_Title}>404</h1>
                <h2 className={style.Err_text}>
                    oops, someThing wrong, maybe you write not correct adress, or domain not exist
                </h2>
            </div>
        </>
    )
}

export default Custom404;