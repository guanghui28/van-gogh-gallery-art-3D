import * as THREE from "three";

let sound;
let bufferLoaded = false;

export const setupAudio = (camera) => {
	const listener = new THREE.AudioListener();
	camera.add(listener);
	sound = new THREE.Audio(listener);
	const audioLoader = new THREE.AudioLoader(); // create an audio loader
	audioLoader.load("./sounds/sonate_moonlight.mp3", function (buffer) {
		// load the audio file
		sound.setBuffer(buffer); // set the audio source buffer
		sound.setLoop(true); // set the audio source to loop
		sound.setVolume(0.5); // set the audio source volume
		bufferLoaded = true; // set bufferLoaded flag to true once the audio buffer is loaded
	});
};

export const startAudio = () => {
	if (sound && bufferLoaded) sound.play();
};

export const stopAudio = () => {
	if (sound) sound.pause();
};
