// For copying escalation
function handleEscalationClick() {
	const escalation = document.querySelector("#escalation-result");
	const textToCopy = escalation.textContent;

	navigator.clipboard.writeText(textToCopy);
	// .then(() => {
	// 	const popup = document.createElement("div");
	// 	popup.classList.add("popup");
	// 	popup.textContent = "Copied to clipboard!";
	// 	escalation.appendChild(popup);

	// 	setTimeout(() => {
	// 		popup.style.opacity = "0";
	// 		setTimeout(() => {
	// 			escalation.removeChild(popup);
	// 		}, 300); // Match the duration of the transition
	// 	}, 500); // Display duration;
	// })
	// .catch((err) => {
	// 	console.error("Could not copy text: ", err);
	// });
}

function CtoCopy(event) {
	// Don't copy when typing on input fields
	if (event.target.tagName == "INPUT") {
		return;
	}

	if (event.key === "c" || event.key === "C") {
		// Your code here
		console.log('The "C" key was pressed!');
		handleEscalationClick();
	}
}

const result = document.querySelector("#escalation-result");
result.addEventListener("click", handleEscalationClick);

document.addEventListener("keydown", CtoCopy);
