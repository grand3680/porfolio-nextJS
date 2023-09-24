import Heading from '@/components/Heding';
import NavBar from '@/components/navigation/NavBar';

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