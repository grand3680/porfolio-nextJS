// import styles from '../styles/Main.module.main.scss'
import styles from './Styles/base.module.scss' 
import NavBar from '@/components/navigation/NavBar';

const Heading = () => (
   <> 
    <div class="particle-background">
        <canvas class="canvas_particle-background"></canvas>
    </div>

    <div class="container">
      <NavBar/>
    </div>
   </>
)

export default Heading;