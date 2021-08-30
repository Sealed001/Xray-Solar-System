// Import Engine
const { Engine } = require("engine");

// Import Game
const Game = require("./src/game");

// Import Settings
const settings = require("./settings/index");

// Import Modules
const Modules = require("./modules");

// Run Game
new Engine(
    [...Modules, Game],
    settings
).run();