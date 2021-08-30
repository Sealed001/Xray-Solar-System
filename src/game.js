const { colors } = require("engine");

class Game {
    on2dDraw() {
        this.raylib.DrawRectangle(200, 1, 20, 20, colors.red);
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