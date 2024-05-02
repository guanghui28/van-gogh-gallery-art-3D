import * as THREE from "three";

export const setupCeiling = (scene) => {
	// Create a ceiling
	const ceilingTexture = new THREE.TextureLoader().load("./img/ceiling.jpg");
	const ceiling = new THREE.Mesh(
		new THREE.PlaneGeometry(100, 100),
		new THREE.MeshLambertMaterial({
			map: ceilingTexture,
		})
	);
	ceiling.rotation.x = Math.PI / 2;
	ceiling.position.set(0, 20, 0);
	scene.add(ceiling);
};
