import * as THREE from "three";

export const setupLighting = (scene) => {
	// light
	// Ambient light
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
	scene.add(ambientLight);

	// Spotlight can be used to simulate ceiling-mounted lights or track lights that
	// focus on specific areas or artworks.
	function createSpotlight(x, y, z, intensity, targetPosition) {
		const spotLight = new THREE.SpotLight(0xffffff, intensity);
		spotLight.position.set(x, y, z);
		spotLight.target.position.copy(targetPosition);
		spotLight.castShadow = true;
		spotLight.angle = Math.PI / 3;
		spotLight.penumbra = 0.9;
		spotLight.decay = 2;
		spotLight.distance = 60;
		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;

		scene.add(spotLight);

		return spotLight;
	}

	// add spotlight to track light the arts
	const spotlight1 = createSpotlight(
		0,
		20,
		-10,
		2,
		new THREE.Vector3(0, 10, -40)
	);
	const spotlight2 = createSpotlight(
		0,
		20,
		10,
		2,
		new THREE.Vector3(0, 10, 40)
	);
	const spotlight3 = createSpotlight(
		-10,
		20,
		0,
		2,
		new THREE.Vector3(-40, 10, 0)
	);
	const spotlight4 = createSpotlight(
		10,
		20,
		0,
		2,
		new THREE.Vector3(40, 10, 0)
	);

	// Add spotlights to scene
	scene.add(spotlight1, spotlight2, spotlight3, spotlight4);
	scene.add(
		spotlight1.target,
		spotlight2.target,
		spotlight3.target,
		spotlight4.target
	);
};
