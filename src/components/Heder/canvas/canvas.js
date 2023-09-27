import { useEffect, useRef } from 'react';
import { ParticleBackground } from './elements/ParticleBackground';


const CanvasParticleBackground = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      ParticleBackground.makeCanvas(canvas);
      ParticleBackground.update();
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas_particle" {...props}/>
};

export default CanvasParticleBackground