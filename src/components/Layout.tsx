import Heading from '@/components/Heder/Heding';
import container from '@/styles/container.module.scss';
import type { FC, PropsWithChildren } from 'react';

const Layout : FC<PropsWithChildren> = ({ children }) => {
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