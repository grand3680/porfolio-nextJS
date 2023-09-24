import Link from 'next/link'
import {navigations} from './links'
// import styles from '../../styles/Main.module.main.scss'

// import '../../styles/globals.scss';
import staleses from './navStyles.module.scss'

const NavBar = () => {
    return (
        <>
            <h1 className={ staleses.navigations }>hwe</h1>        
            <nav>

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
        </>
    )
}
 
 export default NavBar;