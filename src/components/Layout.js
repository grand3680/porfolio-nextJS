import Heading from '@/components/Heder/Heding';
import container from '@/styles/container.module.scss';

// import aboutPage from '@/components/about/';

const Layout = ({ children }) => {
    return (
        <>
            <Heading/>

            <div className={container.container}> 
                {children}
            </div>

        </>
    )
}

export default Layout;