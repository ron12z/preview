import { getRestrictions } from "./restriction";

const escalations = {};

function addRestriction(key, value) {
	if (!(key in escalations)) {
		escalations.key = value;
	}
}

function removeRestriction(key) {
	if (key in escalations) {
		delete escalations.key;
	}
}

function getEscalation() {
	let result = [];

	Object.values(escalations).forEach((value) => {
		result.push(value);
	});

	if (result.length > 1) {
		result = result.slice(0, -1).join(", ") + ", and " + result.slice(-1);
	} else if (result.length === 1) {
		result = result[0];
	} else if (result.length === 0) {
		result = "No restriction selected";
	}

	return result;
}

function updateResult() {
	const allRestrictions = getRestrictions();

	const escalationResult = document.querySelector("#escalation-result");
	escalationResult.textContent = getEscalation();

	const allChecked = document.querySelectorAll("option-plain.checked");

	allChecked.forEach((option) => {
		const id = option.getAttribute("id");
		const restriction = allRestrictions[id];
		addRestriction(restriction);
	});

	console.log(getEscalation());
}

export default {
	addRestriction,
	removeRestriction,
	getEscalation,
	updateResult,
};
