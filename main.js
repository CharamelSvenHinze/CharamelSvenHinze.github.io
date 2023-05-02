const app = new PIXI.Application({width: 640, height:360, backgroundAlpha: 0});
document.body.appendChild(app.view);

const background = PIXI.Sprite.from("background.png");
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

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
    const texture = PIXI.Texture.from("newIOS.mp4")
    //const texture = PIXI.VideoBaseTexture.fromUrl("video.webm")
    // const texture = PIXI.VideoBaseTexture.fromUrls([
    //     //{src: "/video.mov", mime: "video/mov"},
    //     {src: "/video.webm", mime: "video/webm"}
    // ]);

    const video = new PIXI.Sprite(texture);
    video.width = app.screen.width;
    video.height = app.screen.height;
    app.stage.addChild(video);

    app.stage.removeChild(button)
});


