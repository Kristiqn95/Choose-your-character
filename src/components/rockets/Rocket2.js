import Rocket from "../Rocket";

export default class Rocket2 extends Rocket {
    constructor() {
        super({
            textureName:'rocket2',
            acceleration: 400,
            handling: 100,
            speed: 70,
            name: 'rocket-2'
        });

        this._fire.rotation = 3.5;
        this._fire.x = 280;
        this._fire.y = 240;
    }
}