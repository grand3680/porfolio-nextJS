import Heading from '@/components/Heder/Heding';
import NavBar from '@/components/navigation/NavBar';

// import aboutPage from '@/components/about/';

const Layout = ({ children }) => {
    return (
        <>
            <Heading/>
            {/* <NavBar/> */}


            <div> 
                {children}
            </div>

        </>
    )
}

export default Layout;