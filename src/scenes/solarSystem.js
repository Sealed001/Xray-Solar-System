const { GameObject2D, CircleRenderer, Color } = require("engine");

module.exports = {
    sun: new GameObject2D({
        renderers: [
            new CircleRenderer({
                radius: 150,
                color: Color.yellow
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
                                color: Color.blue
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
                                                color: Color.gray
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