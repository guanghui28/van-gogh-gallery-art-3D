import * as THREE from "three";
import { scene, setupScene } from "./js/scene.js";
import { createWalls } from "./js/walls.js";
import { setupFloor } from "./js/floor.js";
import { setupCeiling } from "./js/ceiling.js";
import { createPainting } from "./js/paintings.js";
import { setupLighting } from "./js/lighting.js";
import { createBoundingBoxes } from "./js/boundingBox.js";
import { addObjectsToScene } from "./js/sceneHelper.js";
import { setupPlayButton } from "./js/menu.js";
import { setupRendering } from "./js/rendering.js";
import { setupEventListener } from "./js/eventListener.js";
import { setupAudio } from "./js/audioGuide.js";
import { clickHandling } from "./js/clickHandling.js";

const { camera, controls, renderer } = setupScene();
setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
setupFloor(scene);
setupCeiling(scene);
const paintings = createPainting(textureLoader);
setupLighting(scene);
createBoundingBoxes(walls);
createBoundingBoxes(paintings);
addObjectsToScene(scene, paintings);
setupPlayButton(controls);
setupEventListener(controls);
setupRendering(scene, camera, renderer, paintings, controls, walls);
clickHandling(renderer, camera, paintings);
