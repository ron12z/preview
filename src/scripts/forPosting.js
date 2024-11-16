import { getCurrentTime } from "./miscUtils";

const eventTypes = ["keyup", "keydown", "keypress", "change", "click"];
const choices = document.querySelectorAll(".choice");
const resetBtn = document.querySelector("#miscReset");
const result = document.querySelector("#result");

function showHideInput(choice) {
	const id = choice.getAttribute("id");
	const linkedCount = choice.querySelector(`#${id}-count`);

	if (choice.classList.contains("selected")) {
		linkedCount.style.display = "flex";
	} else {
		linkedCount.style.display = "none";
	}
}

resetBtn.addEventListener("click", () => {
	choices.forEach((choice) => {
		choice.classList.remove("selected");
		choice.querySelector("input").value = "";
		showHideInput(choice);
	});
});

choices.forEach((choice) => {
	const input = choice.querySelector("input");

	input.addEventListener("click", (event) => {
		event.stopPropagation();
	});
	eventTypes.forEach((type) => {
		input.addEventListener(type, updateResult);
	});

	choice.addEventListener("click", () => {
		choice.classList.toggle("selected");

		showHideInput(choice);
		updateResult();
	});
});

function getInputValue(choice) {
	const time = getCurrentTime();
	const input = choice.querySelector("input");
	const value = input.value.trim();
	const queue = choice.querySelector("p").textContent.trim();

	let result = `${queue}: <b>[slot]</b> - Updated as of ${time}.</br>`;

	if (value == "") {
		result = result.replace("[slot]", "CLEARED");
	} else {
		result = result.replace("[slot]", `${value} for review`);
	}

	return result;
}

function updateResult() {
	const selectedChoices = document.querySelectorAll(".selected");
	if (selectedChoices.length > 0) {
		let forPostingResult = "";

		selectedChoices.forEach((selectedChoice) => {
			const choiceResult = getInputValue(selectedChoice);

			forPostingResult += choiceResult;
		});

		result.innerHTML = forPostingResult;
	} else {
		result.innerHTML = "Please select cleared queues below:</br>";
	}
}

setInterval(updateResult, 500);
