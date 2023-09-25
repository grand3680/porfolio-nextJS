// import styles from '../styles/Main.module.main.scss'
import styles from './styles/skills.module.scss';
import someTestSkill from './skills';

const skills = () => (
  <>
    <ul className={styles.skills}>
        {someTestSkill.map(({category, skills}) => 
            <li className={styles.skills_li}>
                <h2 className={styles.skills_category}>{category}</h2>
                <ul className={styles.skills_ul}>
                    {skills ? 
                        skills.map(skill => (
                            <li className={styles.skills_description}>{skill}</li>
                        )) 
                    : ''}
                </ul>         
            </li>        
        )}
    </ul>
  </>

)

export default skills;