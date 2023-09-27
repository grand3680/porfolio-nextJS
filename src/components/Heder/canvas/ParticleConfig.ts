export class ParticleConfig {
  ParticleSize: number = 2.5;
  max_velocity: number = 0.25;
  ParticleCount: number = 250;
  touchLength: number = 125;
  ctx   : any;
  canvas: any;
  arrPoint: { x: number; y: number; FillColor: string; velocityX: number; velocityY: number; size: number }[] = [];
  colors: string[] = ["#DFDFDD", "#2B3128", "#F8F3E7"];
  strokeColor: string = "150, 150, 50";

  constructor() {
    this.ParticleSize =  2.5; // Initialize to null here
  }
}

const configJson = new ParticleConfig();
export default configJson;

