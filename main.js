let app = new PIXI.Application({width: 640, height:360, backgroundAlpha: 0});
document.body.appendChild(app.view);

let texture = PIXI.Texture.from("video.webm")

let video = new PIXI.Sprite(texture)
app.stage.addChild(video);