import * as THREE from "three";

export const setupFloor = (scene) => {
	// Texture of floor
	const floorTexture = new THREE.TextureLoader().load("./img/floor.png");
	floorTexture.wrapS = THREE.RepeatWrapping;
	floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set(10, 10);

	// Create floor plane
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(100, 100),
		new THREE.MeshPhongMaterial({
			map: floorTexture,
			side: THREE.DoubleSide,
		})
	);
	floor.receiveShadow = true;
	floor.rotation.x = Math.PI / 2;
	floor.rotation.y = -Math.PI;

	scene.add(floor);
};
