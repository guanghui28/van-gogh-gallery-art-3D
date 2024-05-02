import * as THREE from "three";

import { paintingData } from "./paintingData";

export const createPainting = (textureLoader) => {
	const paintings = [];
	paintingData.forEach((data) => {
		const {
			position: { x, y, z },
			width,
			height,
			imgSrc,
			rotationY,
			info,
			link,
		} = data;
		const painting = new THREE.Mesh(
			new THREE.PlaneGeometry(width, height),
			new THREE.MeshBasicMaterial({
				map: textureLoader.load(imgSrc),
			})
		);
		painting.position.set(x, y, z);
		painting.rotation.y = rotationY;

		painting.userData = {
			type: "painting",
			info,
			url: link,
		};

		painting.castShadow = true;
		painting.receiveShadow = true;

		paintings.push(painting);
	});
	return paintings;
};
