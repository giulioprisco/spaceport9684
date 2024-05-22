// spaceport9684
// A spaceport on a long strip of land in the sea.
// The offices and social facilities are on one beach side.
// The launch pads are on the other beach side.
// Made with Croquet Microverse.
// https://croquet.io
// See behaviors/terrain.js for terrain specs.


export function init(Constants) {
    Constants.AvatarNames = ["newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"].map((n) => ({
        type: "3d",
        name: n,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation: `./assets/avatars/${n}.zip`,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
        behaviorModules: ["HillsideWalker"]
    }));

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "terrain.js", "ambientSound.js", "menus.js", "blowing.js", "urlLink.js", "replaceWorld.js", "walker.js"
    ];


    // rotates an object around a center point.
    function rotateTo(center, length, angle){
        let pos = [];
        pos.push(length*Math.sin(angle));
        pos.push(0);
        pos.push(length*Math.cos(angle));
        pos[0]+=center[0];
        pos[1]=center[1];
        pos[2]+=center[2];
        return pos;
    }

    Constants.DefaultCards = [

	
	{
            card: {
                name: "entrance",
                type: "object",
                translation: [180, -3, 74],
                rotation: [0, Math.PI/4, 0],
		spawn: "default",
            }
        },
        

        {
	
            card: {
                name: "ambient sound",
                // translation: [0, 0, 0],
                // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/WindAmbience.aac",
                // textureLocation: "./assets/images/mythos.png",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },

        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Lights"],
                dataType: "jpg",
                dataLocation: "./assets/sky/aboveClouds.jpg",
                attribution: "Above the Clouds texture from HDRMaps.com",
                clearColor: 0xffffff,
                loadSynchronously: true,
            }
        },

{
            card: {
                name: "About",
                translation: [180, -2.5, 50],
                rotation: [0, -Math.PI/2, 0],
                scale: [4, 4, 4],
                layers: ["pointer", "walk"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "./assets/PDF/Spaceport9684Readme.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },

{
            card: {
                name: "image card",
                translation: [180, -3, 45],
                rotation: [0, -Math.PI/2, 0],
		layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/spaceport9684intropanel.jpg",
                cardURL: "https://giulioprisco.github.io/notebook/#spaceport9684",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
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
                name: "Gallery Card",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://croquet.github.io/gallery",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                translation: [180, -3, 40],
                rotation: [0, -Math.PI/2, 0],
                layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/beam-me-up-scotty.jpg",
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
		  	translation: [170, -4.8, 60],
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
		  	translation: [174, -4.8, 64],
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
		  	translation: [174, -5, 40],
			scale: [1, 1, 1],
			rotation: [0, 0, 0],
			layers: ["pointer", "walk"],
			name: "/army_hangar_ready_for_unreal_engine.glb",
			dataLocation: "./assets/3D/army_hangar_ready_for_unreal_engine.glb",
			fileName: "/army_hangar_ready_for_unreal_engine.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
                        attribution: "G4AGamingLabs at sketch fab",
            }
	},

/*
{
                 card: {
                name: "space launch system",
                translation: [-175, -5, -100],
                scale: [8, 8, 8],
                rotation: [0, 0, 0, 0],
                layers: ["pointer", "walk"],
                name: "/space_launch_system_sls.glb",
                dataLocation: "./assets/3D/space_launch_system_sls.glb",
                dataScale: [1, 1, 1],
                fileName: "/space_launch_system_sls.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
		attribution: "clarence365 at sketch fab",


      }
        },
*/

{
                 card: {
                name: "spacex starship",
                translation: [-175, -5, -100],
                scale: [1, 1, 1],
                rotation: [0, 0, 0, 0],
                layers: ["pointer", "walk"],
                name: "/spacex_starship_ship_s25__booster_9.glb",
                dataLocation: "./assets/3D/spacex_starship_ship_s25__booster_9.glb",
                dataScale: [1, 1, 1],
                fileName: "/spacex_starship_ship_s25__booster_9.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                attribution: "clarence365 at sketch fab",

      }
        },


        {
            card: {
                name:"Terrain",
                behaviorModules: ["Terrain", "Menus"],
                layers: ["terrain"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
                attribution: "Terra   Mike Linkovich (spacejack) on Github",
            }
        },
        
        
    ];
}
