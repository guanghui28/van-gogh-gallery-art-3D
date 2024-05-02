export const displayPaintingInfo = (info) => {
	const infoElement = document.getElementById("painting-info");
	infoElement.innerHTML = `
    <h3 class="title">${info.title} (${info.year})</h3>
    <p class="artist">${info.artist}</p>
		<p class="description">${info.description}</p>
		<p class="see-detail">Click picture to see detail</p>
  `;
	infoElement.classList.add("show");
};

export const hidePaintingInfo = () => {
	const infoElement = document.getElementById("painting-info");
	infoElement.classList.remove("show");
};
