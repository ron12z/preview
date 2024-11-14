import { getEscalations } from "./escalation";

// For copying escalation
function handleEscalationClick() {
	const escalation = document.querySelector(".escalation");
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
const header = document.querySelector("header");
const headerBG = window.getComputedStyle(header).backgroundColor;

export function setEscalationHandler() {
	const activeEscalations = getEscalations();

	if (Object.keys(activeEscalations).length != 0) {
		result.addEventListener("click", handleEscalationClick);
		result.classList.remove("no-content");
		document.addEventListener("keydown", CtoCopy);
		header.style.background = "rgb(160, 60, 60)";
		result.style.cursor = "pointer";
	} else {
		result.removeEventListener("click", handleEscalationClick);
		result.classList.add("no-content");
		document.removeEventListener("keydown", CtoCopy);
		header.style.background = `${headerBG}`;
		result.style.cursor = "not-allowed";
	}
}
