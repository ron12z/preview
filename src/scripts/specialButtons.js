import Escalation from "./escalation";

function hasStatusAlready(string) {
	let hasStatus = false;

	if (string.toLowerCase().includes("(open)")) {
		return true;
	}

	if (string.toLowerCase().includes("(suspended)")) {
		return true;
	}

	if (string.toLowerCase().includes("(closed)")) {
		return true;
	}

	if (string.toLowerCase().includes("(timeout)")) {
		return true;
	}

	return false;
}

export default function activateSpecialButtons() {
	const specialButtons = document.querySelectorAll(
		"button.open, button.suspended, button.closed, button.timeout"
	);

	specialButtons.forEach((button) => {
		const value = button.getAttribute("data-value");
		const valuesList = ["(Open)", "(Suspended)", "(Closed)", "(Timeout)"];

		button.addEventListener("click", () => {
			const id = button
				.closest(".additional-input")
				.getAttribute("id")
				.replace("-extra", "");

			let target = button.parentElement.previousSibling;
			if (target.tagName != "INPUT") {
				target = target.previousSibling;
			}

			const prevValue = target.value;
			if (hasStatusAlready(prevValue)) {
				valuesList.forEach((oldValue) => {
					target.value = target.value.replace(oldValue, value);
				});
			} else {
				target.value += ` ${value}`;
			}

			// AddEscalation
			Escalation.addEscalation(id);
			Escalation.updateResult();
		});
	});
}
