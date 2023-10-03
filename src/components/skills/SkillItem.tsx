import { FC } from 'react';
import styles from './styles/skills.module.scss';
import Skills from './skills';

const SkillItem : FC = () => {
    return <>
        {Skills.map(({category, skills}) => 
        <li className={styles.skills_li}>              
            <h2 className={styles.skills_category}>{category}</h2>
            <ul className={styles.skills_ul}>
                {skills ? 
                    skills.map((skill) => (
                        <li className={styles.skills_description}>{skill}</li>                              
                    )) 
                : ''}
            </ul>
        </li>
        )}    
    </>
}
  
export default SkillItem;

