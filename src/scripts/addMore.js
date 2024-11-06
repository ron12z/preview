const addMoreBtns = document.querySelectorAll(".addMoreBtn");

addMoreBtns.forEach((button) => {
	button.addEventListener("click", () => {
		const parent = button.parentNode;

		// Create a container div for the input and button
		const fieldContainer = document.createElement("div");
		fieldContainer.classList.add("input-group"); // Add a class for styling if needed

		const newField = document.createElement("input");
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

console.log("hello");
