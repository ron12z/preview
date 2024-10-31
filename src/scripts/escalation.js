import { getRestrictions } from "./restriction";

function updateResult() {
	// Update escalation result
	const escalations = {};

	const allRestrictions = getRestrictions();
	const allChecked = document.querySelectorAll("option-plain.checked");

	function addToEscalation(code, escalation) {
		if (!(code in escalations)) {
			escalations[code] = escalation;
		}
	}

	function getEscalation() {
		let result = [];

		for (const key in escalations) {
			result.push(escalations[key]);
		}

		if (result.length > 1) {
			result = result.slice(0, -1).join(", ") + ", and " + result.slice(-1);
		} else if (result.length === 1) {
			result = result[0];
		} else if (result.length === 0) {
			result = "No restriction selected";
		}

		return result;
	}

	allChecked.forEach((option) => {
		const id = option.getAttribute("id");
		const escalation = option.getAttribute("data-escalation");
		addToEscalation(id, escalation);
	});

	console.log(escalations);

	const escalationResult = document.querySelector("#escalation-result");
	escalationResult.textContent = getEscalation();
}

export default {
	updateResult,
};
