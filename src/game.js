const { Color } = require("engine");

class Game {
    init() {
        this.hue = 0;
    }
    onUpdate() {
        this.hue += this.dt * 20;

        if (this.hue >= 360) {
            this.hue -= 360;
        }
    }
    on2dDraw() {
        this.r.DrawRectangle(0, 0, 50, 50, new Color(255, 0, 255));
        this.r.DrawRectangle(0, 50, 50, 50, Color.HSV(this.hue, 100, 100));
        this.r.DrawRectangle(0, 100, 50, 50, Color.HSV(this.hue, 100, 80));
        this.r.DrawRectangle(0, 150, 50, 50, Color.skyblue);
    }
}

module.exports = Game;

//new Game({}, [GamepadModule]).run(true);
/*
    imagesPath: path.join(projectFolderPath, "assets", "images"),
    audiosPath: path.join(projectFolderPath, "assets", "audios"),
    fontsPath: path.join(projectFolderPath, "assets", "fonts"),
    updateCallbacks: [(game, raylib, dt) => {

    }],
    drawCallbacks: [{type: "2D", callback: (game, raylib) => {

    }}]
}).run(true);*/