import Link from 'next/link'
import {navigations} from './links'
// import styles from '../../styles/Main.module.main.scss'

// import '../../public/globals.scss';

const NavBar = () => {
    return (
        <nav className={styles.navigations}>

            <ul>
                {navigations.map(({id, title, path}) => (
                    
                    <li>
                        <Link key={id} href={path}>{title}</Link>
                    </li> 
                ))}


            </ul>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}
 
 export default NavBar;