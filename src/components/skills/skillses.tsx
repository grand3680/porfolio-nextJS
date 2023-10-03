import styles from './styles/skills.module.scss';
import { FC } from 'react';
import SkillItem from './SkillItem';

const skills : FC = () => {
  return <>
    <ul className={styles.skills}>
        <SkillItem />
    </ul>
  </>
}

export default skills;