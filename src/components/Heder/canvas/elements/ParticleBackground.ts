import configJson from './ParticleConfig';
import { ParticleFunction, TypeUp, FunctionArgs } from './ParticleFunction';

export class ParticleBackground {
  static reqId: number;

  static particleMove(particles: any[], MetodfunMove?: TypeUp): void {
    particles.forEach(particle => {
      if (particle.x > configJson.canvas.width) particle.x = 0;
      if (particle.y > configJson.canvas.height) particle.y = 0;
      if (particle.x < 0) particle.x = configJson.canvas.width;
      if (particle.y < 0) particle.y = configJson.canvas.height;

      if (MetodfunMove && typeof MetodfunMove === 'function') {
        MetodfunMove(particle);
      }      
      
      particle.x += particle.velocityX; // x coordinates
      particle.y += particle.velocityY; // y coordinates
    });

    ParticleFunction.drawParticle(particles);
  }

  private static resizeWindowFunc() : void {
      configJson.canvas.width = window.innerWidth;
      configJson.canvas.height = window.innerHeight;
      if (configJson.canvas.width <= 800) {
        configJson.canvas.width = 800;
        configJson.canvas.height = 1000;
      }    
  }

  private static resizeWindow(): void {
    window.addEventListener("resize", this.resizeWindowFunc);
  }

  static makeCanvas(canvas: HTMLCanvasElement): void {
    configJson.canvas = canvas;
    configJson.ctx = canvas.getContext("2d")!;

    this.resizeWindow();
    configJson.arrPoint = [];
    setTimeout(this.resizeWindowFunc, 200)

    setTimeout(() => {

      for (let i = 0; i < configJson.ParticleCount; i++) {
        let [cordX, cordY] = ParticleFunction.getRandomCords();
        let randomColor = configJson.colors[Math.floor(Math.random() * configJson.colors.length)];
        let velocityX = ParticleFunction.getRandomVelocity(configJson.max_velocity);
        let velocityY = ParticleFunction.getRandomVelocity(configJson.max_velocity);

        configJson.arrPoint.push({
          x : cordX, 
          y : cordY, 
          FillColor : randomColor, 
          velocityX : velocityX, 
          velocityY : velocityY, 
          size : configJson.ParticleSize
        });
      }      
    }, 300)

  }

  static update(Metodfun?: TypeUp, ...args: FunctionArgs): void {
    this.particleMove(configJson.arrPoint, Metodfun);
    args.forEach(func => typeof func === 'function' ? func() : '');
    this.reqId = window.requestAnimationFrame(() => this.update(Metodfun, ...args));
  }
}
