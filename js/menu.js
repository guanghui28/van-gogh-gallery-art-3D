// Hide the menu
export const hideMenu = () => {
	const menu = document.getElementById("menu");
	menu.style.display = "none";
};

// Show the menu when the pointer is unlocked
export const showMenu = () => {
	const menu = document.getElementById("menu");
	menu.style.display = "block";
};

// Lock the pointer (controls are activated) and hide the menu when the experience starts
export const startExperience = (controls) => {
	// lock the pointer
	controls.lock();
	// hide the menu
	hideMenu();
};

export const setupPlayButton = (controls) => {
	const playButton = document.getElementById("play_button");
	playButton.addEventListener("click", () => startExperience(controls));
};
