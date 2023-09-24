import Heading from './Heding';
import NavBar from './navigation/NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <Heading/>
            <NavBar/>

            <div> 
                {children}
            </div>

        </>
    )
}

export default Layout;