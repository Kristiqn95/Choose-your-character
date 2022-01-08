import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket1',
      acceleration: 10,
      handling: 50,
      speed: 20,
      name: 'rocket-1'
    });

    this._fire.rotation = 3.7;
    this._fire.x = 300;
    this._fire.y = 260;
  }
}