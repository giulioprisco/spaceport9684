// tutorial1.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "gridFloor.js", "urlLink.js", "joeTheBox.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                behaviorModules: ["GridFloor"],
                layers: ["walk"],
                type: "object",
                translation:[0, -2, 0],
                shadow: true,
            }
        },   
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/bluesky.jpg",
                fileName: "/bluesky.jpg",
		dataType: "jpg",
            }
        },
{
            card: {
		  	translation: [-5, -1.65, -5],
			scale: [1.5, 1.5, 1.5],
			rotation: [0, 0, 0],
			layers: ["pointer", "walk"],
			name: "/tesla-cybertruck.glb",
			dataLocation: "./assets/3D/tesla-cybertruck.glb",
			fileName: "/tesla-cybertruck.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
            }
	},

        {
            card: {
                name: "image card",
                translation: [0, 0.4, -10],
                //rotation: [0, Math.PI / 2, 0],
		layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/starbase-boca-chica.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
{
            card: {
                name: "image card",
                translation: [8, 0.4, -10],
                //rotation: [0, Math.PI / 2, 0],
		layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/starbase-launch-area.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

{
            card: {
                name: "image card",
                translation: [0, 0.4, 10],
                rotation: [0, Math.PI, 0],
		layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo.jpg",
                cardURL: "https://croquet.io",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
{
            card: {
                name: "text editor",
                className: "TextFieldActor",
                translation: [-5, 0, -10],
                rotation: [0, 0, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: "This will be a space launch site running on port :9684,\nloosely inspired by SpaceX's Starbase in Texas."}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xf4e056,
                color: 0x000000,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 2,
                height: 2,
                textScale: 0.004,
                shadow: true,
            }
        },

    ];
}
