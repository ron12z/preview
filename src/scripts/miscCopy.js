function copyFormattedContent(event) {
	// Default
	// Find the <p class="text"> element within the clicked text-group
	const textElement = event.currentTarget.querySelector("p");
	const result = document.querySelector("#result");

	// Main process
	function copy(target) {
		const htmlToCopy = target.innerHTML;

		// Create a temporary element to hold the HTML
		const tempElement = document.createElement("div");
		tempElement.innerHTML = htmlToCopy;

		// Append the temporary element to the body
		document.body.appendChild(tempElement);

		// Select the content of the temporary element
		const selection = window.getSelection();
		const range = document.createRange();
		range.selectNodeContents(tempElement);
		selection.removeAllRanges();
		selection.addRange(range);

		// Copy the selected content to the clipboard
		document.execCommand("copy");

		// Clean up: remove the temporary element and clear the selection
		document.body.removeChild(tempElement);
		selection.removeAllRanges();
	}

	// Default and other options to copy
	if (textElement) {
		copy(textElement);
		// Get the inner HTML, which includes formatting
	} else if (event.currentTarget == result) {
		copy(result);
	} else if (event.currentTarget == approveChoice1) {
		copy(approveChoice1);
	} else if (event.currentTarget == approveChoice2) {
		copy(approveChoice2);
	} else {
		console.error("No text element found within the clicked group.");
		// Optionally, inform the user that there's no text to copy
	}
}

function showCopiedToClipboard(event) {
	const targetDiv = event.currentTarget;

	// Create the pop-up element
	const popup = document.createElement("div");
	popup.classList.add("popup");
	popup.textContent = "Copied to Clipboard!";

	// Append the pop-up to the target div
	targetDiv.appendChild(popup);

	// Fade out and remove the pop-up after a delay
	setTimeout(() => {
		popup.style.opacity = "0";
		setTimeout(() => {
			targetDiv.removeChild(popup);
		}, 300); // Match the duration of the transition
	}, 500); // Display duration
}

const clickables = document.querySelectorAll(".clickable");
clickables.forEach((clickable) => {
	clickable.addEventListener("click", copyFormattedContent);
	clickable.addEventListener("click", showCopiedToClipboard);
});
