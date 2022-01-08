import Rocket from "../Rocket";

export default class Rocket4 extends Rocket {
    constructor(){
        super({
            textureName: 'rocket4',
            acceleration: 30,
            handling: 5,
            speed: 70,
            name: 'rocket-4'
        });

        this._fire.rotation = -Math.PI / 2;
        this._fire.x = 95;
        this._fire.y = 130;
        this._fire.scale.set(0.3);
    }
}