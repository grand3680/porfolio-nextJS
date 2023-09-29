import styles from './styles/about.module.scss';
import Image from 'next/image';
import profilePic from '@/images/rudeface.png';
import { useRef, useLayoutEffect} from 'react';
import TypingText from './typing';

const about = () => {
    const aboutRef = useRef(null);

    useLayoutEffect(() => {
        const AboutElement = aboutRef.current;

        if (AboutElement) {
            new TypingText (
                AboutElement,
                {
                    textContent : [
                        'hey',
                        'I"m proggrammer',
                        'I know - ',
                        'HTML/css',
                        'JS ( THREE.JS, jquery )',
                        'SCSS and SASS  ❤️ ( I used on this project )',
                        'NextJs with React',
                        '...'
                    ],
                    id : 1,
                    delay : 125,
                    backDelay : 25,
                }
            );

        }
    }, []);

    return ( 
    <> 
        <section className={styles.information}>
            <div className={styles.section_information}>
                <div className={styles.content_information}>
                    <h1 ref={aboutRef} className={styles.title_information}>About me</h1>    
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
    </>
    )
}


export default about;