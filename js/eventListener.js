import { keysPressed } from "./movement";
import { showMenu, hideMenu } from "./menu";
import { startAudio, stopAudio } from "./audioGuide";

let lockPointer = true;
let showMenuOnUnLock = true;

export const setupEventListener = (controls, camera, scene) => {
	document.addEventListener(
		"keydown",
		(event) => onKeyDown(event, controls),
		false
	);

	document.addEventListener(
		"keyup",
		(event) => onKeyUp(event, controls),
		false
	);

	controls.addEventListener("unlock", () => {
		if (showMenuOnUnLock) {
			showMenu();
		}
		showMenuOnUnLock = false;
	});

	document
		.getElementById("start_audio")
		.addEventListener("click", startAudio, false);
	document
		.getElementById("stop_audio")
		.addEventListener("click", stopAudio, false);
};

function togglePointerLock(controls) {
	if (lockPointer) {
		controls.lock();
	} else {
		showMenuOnUnLock = false;
		controls.unlock();
	}

	lockPointer = !lockPointer;
}

function onKeyDown(event, controls) {
	if (event.key in keysPressed) {
		keysPressed[event.key] = true;
	}

	if (event.key === "Escape") {
		showMenu();
		showMenuOnUnLock = true;
		controls.unlock();
		lockPointer = false;
	}

	if (event.key === "x") {
		toggleInfoPanel();
	}

	if (event.key === "Enter") {
		hideMenu();
		controls.unlock();
		lockPointer = true;
	}

	if (event.key === " ") {
		togglePointerLock(controls);
	}

	if (event.key === "g") {
		startAudio();
	}

	if (event.key === "h") {
		stopAudio();
	}

	if (event.key === "m") {
		showMenu();
		showMenuOnUnLock = true;
		controls.unlock();
		lockPointer = false;
	}

	if (event.key === "r") {
		location.reload();
	}
}

function onKeyUp(event, controls) {
	if (event.key in keysPressed) {
		keysPressed[event.key] = false;
	}
}

function toggleInfoPanel() {
	document.getElementById("info-panel").classList.toggle("collapsed");
	document.getElementById("toggle-info").innerText = document
		.getElementById("info-panel")
		.classList.contains("collapsed")
		? "Show"
		: "Hide";
}

document
	.getElementById("toggle-info")
	.addEventListener("click", toggleInfoPanel);

document.getElementById("about_button").addEventListener(
	"click",
	() => {
		document.getElementById("about-overlay").classList.add("show");
	},
	false
);

document.getElementById("close-about").addEventListener(
	"click",
	() => {
		document.getElementById("about-overlay").classList.remove("show");
	},
	false
);
