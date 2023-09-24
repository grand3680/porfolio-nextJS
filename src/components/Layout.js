import Heading from '@/components/Heder/Heding';
import NavBar from '@/components/navigation/NavBar';

// import aboutPage from '@/components/about/';
import About from '@/components/aboutPage/About';

const Layout = ({ children }) => {
    return (
        <>
            <Heading/>
            {/* <NavBar/> */}

            <About/>

            <div> 
                {children}
            </div>

        </>
    )
}

export default Layout;