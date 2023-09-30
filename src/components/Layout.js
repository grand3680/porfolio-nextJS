import Heading from '@/components/Heder/Heding';
import container from '@/styles/container.module.scss';


const Layout = ({ children }) => {
    return (
        <>
            <Heading/>

            <div className={`${container.container}`}> 
                {children}
            </div>

        </>
    )
}

export default Layout;