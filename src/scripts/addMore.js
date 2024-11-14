import Escalation from "./escalation.js";
import activateSpecialButtons from "./specialButtons.js";

const addMoreBtns = document.querySelectorAll(".addMore");

addMoreBtns.forEach((button) => {
	button.addEventListener("click", () => {
		const id = button
			.closest(".additional-input")
			.getAttribute("id")
			.replace("-extra", "");

		const parent = button.parentNode;
		const parentSlot = parent.getAttribute("data-slot");
		const allInputElements = parent.querySelectorAll("input");
		const lastInputElement = allInputElements[allInputElements.length - 1];
		const placeholder = lastInputElement.getAttribute("placeholder");
		const placeholderSplit = placeholder.split(" ");
		const placeholderText = placeholderSplit.slice(0, -1).join(" ");
		const placeholderNumber =
			Number(placeholderSplit[placeholderSplit.length - 1]) + 1;
		const newElementPlaceholder = `${placeholderText} ${placeholderNumber}`;

		// Create a container div for the input and button
		const fieldContainer = document.createElement("div");
		fieldContainer.classList.add("input-group", "from-addMore"); // Add a class for styling if needed

		const newFieldWrapper = document.createElement("div");
		newFieldWrapper.classList.add("input-wrapper");

		const newField = document.createElement("input");
		newField.setAttribute("data-slot", parentSlot);
		newField.setAttribute("placeholder", newElementPlaceholder);
		Escalation.addInputEventHandler(newField);
		newField.type = "text";

		// Create the remove button
		const removeButton = document.createElement("button");
		removeButton.textContent = "❌";
		removeButton.classList.add("remove-button");

		// Add event listener to the remove button
		removeButton.addEventListener("click", () => {
			parent.removeChild(fieldContainer); // Remove the entire container
			Escalation.addEscalation(id);
			Escalation.updateResult();
		});

		// Append input and button to the container
		newFieldWrapper.appendChild(newField);
		newFieldWrapper.appendChild(removeButton);
		fieldContainer.appendChild(newFieldWrapper);

		// If lastInputElement is special, add buttons in innerHTML or fieldContainer
		if (lastInputElement.getAttribute("data-special") == "true") {
			newField.setAttribute("data-special", "true");

			const div = document.createElement("div");
			div.classList.add("special-buttons");

			const statusLabel = document.createElement("h5");
			statusLabel.textContent = "Status:";

			const buttonOpen = document.createElement("button");
			buttonOpen.className = "open";
			buttonOpen.setAttribute("data-value", "(Open)");
			buttonOpen.textContent = "O";

			const buttonSuspended = document.createElement("button");
			buttonSuspended.className = "suspended";
			buttonSuspended.setAttribute("data-value", "(Suspended)");
			buttonSuspended.textContent = "S";

			const buttonClosed = document.createElement("button");
			buttonClosed.className = "closed";
			buttonClosed.setAttribute("data-value", "(Closed)");
			buttonClosed.textContent = "C";

			const buttonTimeout = document.createElement("button");
			buttonTimeout.className = "timeout";
			buttonTimeout.setAttribute("data-value", "(Timeout)");
			buttonTimeout.textContent = "T";

			div.appendChild(statusLabel);
			div.appendChild(buttonOpen);
			div.appendChild(buttonSuspended);
			div.appendChild(buttonClosed);
			div.appendChild(buttonTimeout);

			fieldContainer.appendChild(div); // Append instead of innerHTML
		} else {
			newField.setAttribute("data-special", "false");
		}

		// Insert the container before the "Add More" button
		parent.insertBefore(fieldContainer, button);
		newField.focus();
		activateSpecialButtons();
	});
});
