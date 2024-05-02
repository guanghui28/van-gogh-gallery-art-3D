import * as THREE from "three";

const mouse = new THREE.Vector2();
const rayCaster = new THREE.Raycaster();

export function clickHandling(renderer, camera, paintings) {
	renderer.domElement.addEventListener(
		"click",
		(event) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			onClick(camera, paintings);
		},
		false
	);
}

function onClick(camera, paintings) {
	rayCaster.setFromCamera(mouse, camera);

	const intersects = rayCaster.intersectObjects(paintings);

	if (intersects.length > 0) {
		const painting = intersects[0].object;

		window.open(painting.userData.info.link, "_blank");
	}
}
