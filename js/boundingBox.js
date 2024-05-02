import * as THREE from "three";

export const createBoundingBoxes = (objects) => {
	// objects will be either paintings or walls that we pass in from main.js
	if (!Array.isArray(objects)) {
		objects = objects.children;
	}

	objects.forEach((object) => {
		object.BoundingBox = new THREE.Box3();
		object.BoundingBox.setFromObject(object);
	});
};
