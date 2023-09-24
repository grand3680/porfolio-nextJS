import Link from 'next/link'
import {navigations} from './links'
// import styles from '../../styles/Main.module.main.scss'

// import '../../styles/globals.scss';
import styles from './styles/navigations.module.scss'

const NavBar = () => {
    return (
        <>
            <header className={styles.header}>
            <nav>
                {/* <span className={styles.header__logo}>
                    <a href="{% url 'home' %}">
                        <h1>.logo</h1>
                    </a>
                </span> */}
                <ul className={styles.header__navigation}>
                    {navigations.shift().map(({id, title, path}) => (
                        <li>
                            <Link key={id} href={path}>{title}</Link>
                        </li> 
                    ))}
                </ul>
                <button className={styles.header__navigation_menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            </header>
        </>
    )
}
 
 export default NavBar;