//import * as PIXI from "pixi.js"

let app = new PIXI.Application({width: 640, height:360});
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from("Lena.png");
app.stage.addChild(sprite);