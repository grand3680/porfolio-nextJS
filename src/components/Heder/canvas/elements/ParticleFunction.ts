import configJson from '../ParticleConfig';

export type TypeUp = (_: any) => void
export type FunctionArgs = (() => void)[];

export class ParticleFunction {
  static getRandomVelocity(max: number): number {
    let number = ((Math.random() < 0.5) ? -1 : 1) * (Math.random() * max);
    return ((number == 0) ? ParticleFunction.getRandomVelocity(max) : number);
  }

  static getRandomCords(): [number, number] {
    let cordX = Math.floor(Math.random() * configJson.canvas.width);
    let cordY = Math.floor(Math.random() * configJson.canvas.height);

    return [cordX, cordY];
  }

  static drawParticle(particles: any[]): void {
    configJson.ctx.clearRect(0, 0, configJson.canvas.width, configJson.canvas.height);

    particles.forEach(particle => {
      let ParticleX = particle.x;
      let ParticleY = particle.y;
      let ParticleSize = particle.size;

      configJson.ctx.beginPath();
      configJson.ctx.arc(ParticleX, ParticleY, ParticleSize, 0, 2 * Math.PI);

      configJson.ctx.fillStyle = particle.FillColor;

      configJson.ctx.fill();
      configJson.ctx.closePath();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = 0; j < particles.length; j++) {
        if (particles[i].x == particles[j].x && particles[i].y == particles[j].y) continue;


        let distance = Math.sqrt(((particles[i].x - particles[j].x) ** 2) + ((particles[i].y - particles[j].y) ** 2));
  
        if (distance < configJson.touchLength) {
          configJson.ctx.beginPath();
          configJson.ctx.strokeStyle = `rgb(${configJson.strokeColor}, ${0.6 / (distance / 10)})`;
          configJson.ctx.lineWidth = 0.5 + configJson.ParticleSize / (distance / 10);

          configJson.ctx.moveTo(particles[j].x, particles[j].y);
          configJson.ctx.lineTo(particles[i].x, particles[i].y);
          configJson.ctx.stroke();
        }
      }
    }
  }
}
