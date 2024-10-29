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

export default {
	addRestriction,
	removeRestriction,
	getEscalation,
};
