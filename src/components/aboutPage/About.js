import styles from './styles/about.module.scss'
import Image from 'next/image'
import profilePic from '@/images/rudeface.png'

const About = () => {
    return ( 
    <> 
        <section className={styles.information}>
            <div className={styles.section_information}>
                <div className={styles.content_information}>
                    <h1 className={styles.title_information}>About me</h1>    
                    <span className={styles.about_text}>
                        <p>Hey there,</p>
                        <p>My name's Kirill. I'm a programmer focused on graphics, animation, and interaction for web experiences and games.</p>
                        <p>These days I mostly find myself immersed in JavaScript and WebGL for web development</p>
                    </span>       
                </div>
                
                <Image 
                className={styles.title_image} 
                width={500}
                height={500}
                src={profilePic} 
                placeholder='blur'
                alt=""/>
            </div>
        </section>
    </>)
}


export default About;