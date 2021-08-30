const { EventSystemModule, Scene2D } = require("engine");

const { solarSystem } = require("./src/scenes/index");

module.exports = [
    EventSystemModule,
    {
        module: Scene2D,
        args: [
            solarSystem
        ]
    }
];