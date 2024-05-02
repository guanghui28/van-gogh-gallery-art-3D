import * as THREE from "three";

export const createWalls = (scene, textureLoader) => {
	// create the walls
	const wallGroup = new THREE.Group();
	scene.add(wallGroup);

	// create wall material with realistic colors and texture
	const wallTexture = textureLoader.load("./img/wall.jpg");
	wallTexture.wrapS = THREE.RepeatWrapping;
	wallTexture.wrapT = THREE.RepeatWrapping;
	wallTexture.repeat.set(2, 2);

	// Front wall
	const frontWallTexture = new THREE.TextureLoader().load(
		"./img/brick-wall-painted-white.jpg"
	);
	frontWallTexture.wrapS = THREE.RepeatWrapping;
	frontWallTexture.wrapT = THREE.RepeatWrapping;
	frontWallTexture.repeat.set(4, 4);
	const frontWall = new THREE.Mesh(
		new THREE.BoxGeometry(90, 40, 0.001),
		new THREE.MeshLambertMaterial({
			map: frontWallTexture,
		})
	);

	frontWall.position.set(0, 0, -40);

	// Left wall
	const leftWall = new THREE.Mesh(
		new THREE.BoxGeometry(90, 40, 0.001),
		new THREE.MeshLambertMaterial({ map: wallTexture })
	);
	leftWall.rotation.y = Math.PI / 2;
	leftWall.position.set(-40, 0, 0);

	// Right wall
	const rightWall = new THREE.Mesh(
		new THREE.BoxGeometry(90, 40, 0.001),
		new THREE.MeshLambertMaterial({ map: wallTexture })
	);
	rightWall.rotation.y = -Math.PI / 2;
	rightWall.position.set(40, 0, 0);

	// Back wall
	const backWall = new THREE.Mesh(
		new THREE.BoxGeometry(90, 40, 0.001),
		new THREE.MeshLambertMaterial({ map: frontWallTexture })
	);
	backWall.position.z = 40;
	//add to wallGroup
	wallGroup.add(rightWall, leftWall, frontWall, backWall);
	return wallGroup;
};
