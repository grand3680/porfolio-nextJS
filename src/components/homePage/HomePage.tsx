import styles from './styles/home.module.scss';
import { MinecraftFont } from '@/fonts';
import { FC } from 'react';
 
const home : FC = () => {
    return ( 
    <> 
        <section className={styles.HomePg}>
            <div className={styles.HomePage_info}>
                <div className={styles.HomePage_info_content}>
                    <h1 className={styles.title_content}>Hello! I'm a <span className={MinecraftFont.className}>programmer</span></h1>      
                    <h2 className={styles.Subtitle_content}>So this my webSite on NextJS</h2>
                    <p className={styles.text_content}>texting</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default home;