// import styles from '../styles/Main.module.main.scss'
import styles from './styles/base.module.scss' 
import NavBar from '@/components/navigation/NavBar';
import container from '@/styles/container.module.scss';

import { useRef } from 'react';
import Canvas from './canvas/canvas';

const Heading = () => {
  const canvasRef = useRef(null);

  return (<>
   <div className={container.container}> 
    <div className={styles.particle_background}>
        <Canvas id="canvas_particle" className={styles.canvas_particle_background} ref={canvasRef}/>
        {/* <canvas id="canvas_particle" className={styles.canvas_particle_background}></canvas> */}
    </div>

    <div className={styles.container}>
      <NavBar/>
    </div>

   </div>  
  </>)
}

export default Heading;