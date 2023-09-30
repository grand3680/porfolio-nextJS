import { useEffect, useRef, FC } from 'react';
import { ParticleBackground } from './elements/ParticleBackground';


export const Canvas : FC<{className : string}> = ({className}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      ParticleBackground.makeCanvas(canvas);
      ParticleBackground.update();
    }
  }, []);

  return <canvas ref={canvasRef}  className={className}/>
};