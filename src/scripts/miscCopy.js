function handleMiscClick(event) {
	const target = event.currentTarget;
	console.log(target);
	const textToCopy = escalation.querySelector("p").textContent;

	navigator.clipboard.writeText(textToCopy).then(() => {
		const popup = document.createElement("div");
		popup.classList.add("popup");
		popup.textContent = "Copied to clipboard!";
		escalation.appendChild(popup);

		setTimeout(() => {
			escalation.removeChild(popup);
		}, 500);
	});
}

const clickables = document.querySelectorAll("clickable");
clickables.forEach((clickable) => {
	clickable.addEventListener("click", handleMiscClick);
});
