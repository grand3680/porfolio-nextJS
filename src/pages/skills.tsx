import Head from "next/head";
import Skilses from '@/components/skills/skillses';
import { FC } from 'react';

const Skills: FC = () => {
    return (
    <>    
        <Head>
            <title>Skills</title>
        </Head>

        <Skilses/>
    </>
    )
}


export default Skills;