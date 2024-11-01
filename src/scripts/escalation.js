function updateResult() {
	// initialize result array
	let result = [];

	// Select all divs with data-active-escalation attribute
	const allEscalations = document.querySelectorAll("[data-active-escalation]");

	// Add value of those divs to result array
	allEscalations.forEach((escalation) => {
		const activeEscalation = escalation.getAttribute("data-active-escalation");
		if (activeEscalation) {
			result.push(activeEscalation);
		}
	});

	// This block is just for formatting the final result to display (adding comma and "and" when needed )
	if (result.length > 1) {
		result = result.slice(0, -1).join(", ") + ", and " + result.slice(-1);
	} else if (result.length === 1) {
		result = result[0];
	} else if (result.length === 0) {
		result = "No restriction selected";
	}

	// display result
	const resultDiv = document.querySelector("#escalation-result");

	// Default when no restriction is selected, show default
	if (allEscalations.length === 0) {
		resultDiv.textContent = "No restriction selected";
	}

	// When there is at least one restriction selected, format it.
	else if (allEscalations.length >= 1) {
		resultDiv.textContent = "Escalating Case - " + result + ".";
	}
}

export default {
	updateResult,
};
