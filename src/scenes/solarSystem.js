const { GameObject2D, CircleRenderer, colors } = require("engine");

module.exports = {
    sun: new GameObject2D({
        renderers: [
            new CircleRenderer({
                radius: 150,
                color: colors.yellow
            })
        ],
        children: {
            earthRotationPoint: new GameObject2D({
                update: function(deltaTime) {
                    this.rotation += deltaTime * Math.PI / 4;
                },
                children: {
                    earth: new GameObject2D({
                        position: {
                            x: 220
                        },
                        renderers: [
                            new CircleRenderer({
                                radius: 20,
                                color: colors.blue
                            })
                        ],
                        children: {
                            moonRotationPoint: new GameObject2D({
                                update: function(deltaTime) {
                                    this.rotation += deltaTime * Math.PI / 4;
                                },
                                children: {
                                    moon: new GameObject2D({
                                        position: {
                                            x: 35
                                        },
                                        renderers: [
                                            new CircleRenderer({
                                                radius: 9,
                                                color: colors.gray
                                            })
                                        ],
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
};