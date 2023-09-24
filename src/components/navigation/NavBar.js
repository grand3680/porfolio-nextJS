import Link from 'next/link'
import {navigations} from './links'
import { useState } from 'react';

// import '../../styles/globals.scss';
import styles from './styles/navigations.module.scss'
// import menu from './menu'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className={styles.header}>
            <nav>
                <span className={styles.header__logo}>
                    <Link href='/'>
                        <h1>.logo</h1>
                    </Link>
                </span>
                <ul className={`${styles.header__navigation} ${menuOpen ? styles.inline : styles.OffLine}`}>
                    {navigations.map(({id, title, path}) => (
                        <li>
                            <Link key={id} href={path}>{title}</Link>
                        </li> 
                    ))}
                </ul>
                <button onClick={handleMenuToggle} className={styles.header__navigation_menu}>
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