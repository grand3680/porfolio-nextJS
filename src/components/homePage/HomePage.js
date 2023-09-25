import styles from './styles/home.module.scss'

const homePage = () => {
    return ( 
    <> 
        <section className={styles.HomePg}>
            <div className={styles.HomePage_info}>
                <div className={styles.HomePage_info_content}>
                    <h1 className={styles.title_content}>Hello! I'm a <span>programmer</span></h1>      
                    <h2 className={styles.Subtitle_content}>So this my webSite on NextJS</h2>
                    <p className={styles.text_content}>texting</p>
                </div>
            </div>
        </section>
    </>
    )
}


export default homePage;