import Rocket from "../Rocket";

export default class Rocket3 extends Rocket {
    constructor() {
        super({
            textureName:'rocket3',
            acceleration:30,
            handling: 5,
            speed: 70,
            name: 'rocket-3'
        });

        this._fire.rotation = 4;
        this._fire.x = 120;
        this._fire.y = 100;
        this._fire.scale.set(0.5);
    }
}