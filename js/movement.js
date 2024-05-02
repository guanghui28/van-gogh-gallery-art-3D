import * as THREE from "three";

// move more than one direction
export const keysPressed = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,
	w: false,
	a: false,
	s: false,
	d: false,
};

export const updateMovement = (delta, controls, camera, walls) => {
	const moveSpeed = delta * 10;

	// clone the camera position before the movement
	const previousPosition = camera.position.clone();

	if (keysPressed.ArrowRight || keysPressed.d) {
		controls.moveRight(moveSpeed);
	}
	if (keysPressed.ArrowLeft || keysPressed.a) {
		controls.moveRight(-moveSpeed);
	}
	if (keysPressed.ArrowUp || keysPressed.w) {
		controls.moveForward(moveSpeed);
	}
	if (keysPressed.ArrowDown || keysPressed.s) {
		controls.moveForward(-moveSpeed);
	}

	// After movement applied, check collision
	if (checkCollision(camera, walls)) {
		// if it does, revert camera to it's previous
		camera.position.copy(previousPosition);
	}
};

export const checkCollision = (camera, walls) => {
	const playerBoundingBox = new THREE.Box3();
	const cameraWorldPosition = new THREE.Vector3();
	camera.getWorldPosition(cameraWorldPosition);
	playerBoundingBox.setFromCenterAndSize(
		cameraWorldPosition,
		new THREE.Vector3(1, 1, 1)
	);

	// loop through each wall
	for (let i = 0; i < walls.children.length; i++) {
		const wall = walls.children[i]; // get the wall
		if (playerBoundingBox.intersectsBox(wall.BoundingBox)) {
			return true;
		}
	}
	return false;
};
