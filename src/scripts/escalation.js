let ActiveEscalations = {};

function formatInputs(result) {
	// Format values here then return it as string
	// e.g. [1234, 2222, 3333] will return "1234, 2222 & 3333"
	let final_result = "";

	if (result.length == 1) {
		return result[0];
	}

	for (let i = 0; i < result.length; i++) {
		if (i === result.length - 1) {
			final_result += `& ${result[i]}`;
		} else if (i === result.length - 2) {
			final_result += `${result[i]} `;
		} else {
			final_result += `${result[i]}, `;
		}
	}

	return final_result;
}

// Use this in event's listener of selection, choices, and input fields
export function addEscalation(id) {
	const restriction = document.querySelector(`#${id}`);
	const linkedExtra = document.querySelector(`#${id}-extra`);
	const escalation = restriction.getAttribute("data-escalation");

	if (linkedExtra) {
		const selectedOption = linkedExtra
			.querySelector(".selected")
			.getAttribute("data-value")
			.trim();
		const slot1values = [];
		const slot2values = [];
		const slot3values = [];
		const slot4values = [];

		const slot1 = formatInputs(slot1values)
			? formatInputs(slot1values).trim()
			: "";
		const slot2 = formatInputs(slot2values)
			? formatInputs(slot2values).trim()
			: "";
		const slot3 = formatInputs(slot3values)
			? formatInputs(slot3values).trim()
			: "";
		const slot4 = formatInputs(slot4values)
			? formatInputs(slot4values).trim()
			: "";

		//Replace [option] and [slot#] from data-escalation
		const optionFilled = escalation.replace("[option]", selectedOption);
		const slot1Filled = optionFilled.replace("[slot1]", slot1);
		const slot2Filled = slot1Filled.replace("[slot2]", slot2);
		const slot3Filled = slot2Filled.replace("[slot3]", slot3);
		const slot4Filled = slot3Filled.replace("[slot4]", slot4);

		ActiveEscalations[id] = slot4Filled;
	} else {
		ActiveEscalations[id] = escalation;
	}
}

export function removeEscalation(id) {
	if (Object.keys(ActiveEscalations).includes(id)) {
		delete ActiveEscalations[id];
		console.log(`${id} removed`);
	}
}

export function resetEscalation() {
	ActiveEscalations = {};
}

function capitalizeFirstLetter(str) {
	if (!str) return str; // Return as is if the string is empty or null
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function updateResult() {
	let result = [];

	// Add escalation values to result array
	Object.values(ActiveEscalations).forEach((escalation) => {
		result.push(escalation);
	});

	// Join escalation items in result array and format them accordingly
	if (result.length > 1) {
		result = result.slice(0, -1).join(", ") + ", and " + result.slice(-1);
	} else {
		result = result.join("");
	}

	// Update escalation display
	const resultP = document.querySelector("#escalation-result");
	if (result) {
		resultP.textContent = `Escalating case - ${capitalizeFirstLetter(result)}.`;
	} else {
		resultP.textContent = "No restrictions selected.";
	}

	console.log(ActiveEscalations);
}

export default {
	updateResult,
	removeEscalation,
	addEscalation,
	resetEscalation,
};
