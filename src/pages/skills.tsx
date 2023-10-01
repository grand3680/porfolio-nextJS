import Head from "next/head";
import Skilses from '@/components/skills/skillses';
import SkillIcon from '@/images/ava.png'
import { FC } from 'react';

const Skills: FC = () => {
    return (
    <>    
        <Head>
            <title>Skills</title>
            <link rel="icon" href={ SkillIcon.src } sizes="any" />
        </Head>

        <Skilses/>
    </>
    )
}


export default Skills;