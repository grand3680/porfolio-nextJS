import styles from './styles/base.module.scss' 
import NavBar from '@/components/navigation/NavBar';
import container from '@/styles/container.module.scss';
import  { Canvas } from './canvas/canvas';
import { FC } from 'react';

const Heading : FC = () => {
  return (<>
   <div className={container.container}> 
    <div className={styles.particle_background}>
        <Canvas className={styles.canvas_particle_background}/>
    </div>

    <NavBar/>
   </div>  
  </>)
}

export default Heading;