// import styles from '../styles/Main.module.main.scss'
import styles from './Styles/base.module.scss' 
import NavBar from '@/components/navigation/NavBar';


const Heading = () => (
   <> 
    <div className={styles.particle_background}>
        <canvas className={styles.canvas_particle_background}></canvas>
    </div>

    <div className={styles.container}>
      <NavBar/>
    </div>
   </>
)

export default Heading;