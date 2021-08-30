const { readFileSync } = require('fs');
const { join } = require("path");

const windowSettings = JSON.parse(readFileSync(join(process.cwd(), "settings", "window.json"), {flag:'r'}));
const debuggerSettings = JSON.parse(readFileSync(join(process.cwd(), "settings", "debugger.json"), {flag:'r'}));

module.exports = {
    window: windowSettings,
    debugger: debuggerSettings
}