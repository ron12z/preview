const numberOfUsers = document.querySelector("#userNum");
const duplicate = document.querySelector("#duplicate");
const unverified = document.querySelector("#unverified");
const approve = document.querySelector("#approve");
const approveChoice1 = document.querySelector("#approve1");
const approveChoice2 = document.querySelector("#approve2");
const approveChoice3 = document.querySelector("#approve3");
const resetUsers = document.querySelector("#resetUsers");

function fillChoices() {
	const num = numberOfUsers.value.trim();
	const dups = duplicate.value.trim();
	const unvfs = unverified.value.trim();
	let approve1content = "";
	let approve3content = "";

	if (dups != "" && unvfs == "") {
		approve1content = `Client has ${num} related users - ${dups} duplicate device links.`;
	} else if (dups == "" && unvfs != "") {
		approve1content = `Client has ${num} related users - ${unvfs} unverified device links.`;
	} else if (dups == "" && unvfs == "") {
		approve1content = `Client has ${num} related users.`;
	} else {
		approve1content = `Client has ${num} related users - ${dups} duplicates and ${unvfs} unverified device links.`;
	}

	approveChoice2.textContent = `Client has ${num} related users, previously flagged.`;
	approveChoice1.textContent = approve1content;

	if (num == 0) {
		approveChoice1.textContent =
			"Related users + unverified/duplicate device links here.";
		approveChoice2.textContent = "Related users + previously flagged.";
		approveChoice3.textContent = "Related users + no links here.";
	} else {
		approveChoice3.textContent = `Client has ${num} related users, no links.`;
	}
}

resetUsers.addEventListener("click", function (event) {
	const wrapper = document.querySelector(".users-wrapper");
	const userInputs = wrapper.querySelectorAll("input");

	userInputs.forEach((input) => {
		input.value = "";
	});
});

document.addEventListener("click", fillChoices);
document.addEventListener("keyup", fillChoices);
fillChoices();
