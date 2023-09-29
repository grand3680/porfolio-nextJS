import Heading from '@/components/Heder/Heding';
import container from '@/styles/container.module.scss';

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

const Layout = ({ children }) => {
    return (
        <>
            <Heading/>

            <div className={`${container.container} ${roboto.className}`}> 
                {children}
            </div>

        </>
    )
}

export default Layout;