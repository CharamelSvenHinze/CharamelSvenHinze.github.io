const app = new PIXI.Application({width: 640, height:360, backgroundAlpha: 0});
document.body.appendChild(app.view);

const button = new PIXI.Graphics()
    .beginFill(0x0, 0.5)
    .drawRoundedRect(0, 0, 100, 100, 10)
    .endFill()
    .beginFill(0xffffff)
    .moveTo(36, 30)
    .lineTo(36, 70)
    .lineTo(70, 50);

button.x = (app.screen.width - button.width)/2;
button.y = (app.screen.height - button.height)/2;

button.interactive = true;
button.cursor = "pointer";
app.stage.addChild(button)

button.on("pointertap", () => {
    const sprite = PIXI.Sprite.from("background.png");
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;
    app.stage.addChild(sprite);

    const texture = PIXI.Texture.from("video.webm");

    const video = new PIXI.Sprite(texture);
    app.stage.addChild(video);
});


