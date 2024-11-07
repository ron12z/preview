import Escalation from "./escalation.js";

const addMoreBtns = document.querySelectorAll(".addMore");

function inputFieldEventHandler(event) {
	const inputField = event.currentTarget;

	const id = inputField.parentElement.parentElement.parentElement.parentElement
		.getAttribute("id")
		.replace("-extra", "");

	Escalation.addEscalation(id);
	Escalation.updateResult();
}

function addInputEventHandler(inputField) {
	["keyup", "keydown", "blur"].forEach((eventType) => {
		inputField.addEventListener(eventType, inputFieldEventHandler);
	});
}

addMoreBtns.forEach((button) => {
	button.addEventListener("click", () => {
		const parent = button.parentNode;
		const parentSlot = parent.getAttribute("data-slot");
		const allInputElements = parent.querySelectorAll("input");
		const placeholder =
			allInputElements[allInputElements.length - 1].getAttribute("placeholder");
		const placeholderSplit = placeholder.split(" ");
		const placeholderText = placeholderSplit.slice(0, -1).join(" ");
		const placeholderNumber =
			Number(placeholderSplit[placeholderSplit.length - 1]) + 1;
		const newElementPlaceholder = `${placeholderText} ${placeholderNumber}`;

		// Create a container div for the input and button
		const fieldContainer = document.createElement("div");
		fieldContainer.classList.add("input-group", "from-addMore"); // Add a class for styling if needed

		const newField = document.createElement("input");
		newField.setAttribute("data-slot", parentSlot);
		newField.setAttribute("placeholder", newElementPlaceholder);
		addInputEventHandler(newField);
		newField.type = "text";

		// Create the remove button
		const removeButton = document.createElement("button");
		removeButton.textContent = "❌"; // Or any suitable label
		removeButton.classList.add("remove-button");

		// Append input and button to the container
		fieldContainer.appendChild(newField);
		fieldContainer.appendChild(removeButton);

		// Insert the container before the "Add More" button
		parent.insertBefore(fieldContainer, button);
		newField.focus();

		// Add event listener to the remove button
		removeButton.addEventListener("click", () => {
			parent.removeChild(fieldContainer); // Remove the entire container
		});
	});
});
