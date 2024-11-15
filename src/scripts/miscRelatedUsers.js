const numberOfUsers = document.querySelector("#userNum");
const duplicate = document.querySelector("#duplicate");
const unverified = document.querySelector("#unverified");
const approve = document.querySelector("#approve");
const approveChoice1 = document.querySelector("#approve1");
const approveChoice2 = document.querySelector("#approve2");
const resetUsers = document.querySelector("#resetUsers");

function fillChoices() {
	const num = numberOfUsers.value.trim();
	const dups = duplicate.value.trim();
	const unvfs = unverified.value.trim();
	let approve1content = "";

	if (dups != "" && unvfs == "") {
		approve1content = `Client has ${num} related users - ${dups} duplicate device links. No fraud concerns. WD approved.`;
	} else if (dups == "" && unvfs != "") {
		approve1content = `Client has ${num} related users - ${unvfs} unverified device links. No fraud concerns. WD approved.`;
	} else if (dups == "" && unvfs == "") {
		approve1content = `Client has ${num} related users.`;
	} else {
		approve1content = `Client has ${num} related users - ${dups} duplicates and ${unvfs} unverified device links. No fraud concerns. WD approved.`;
	}

	approveChoice2.textContent = `Client has ${num} related users, already reviewed by SA. No fraud concerns. WD approved.`;
	approveChoice1.textContent = approve1content;

	if (num == 0) {
		approveChoice1.textContent = "Enter number of related users.";
		approveChoice2.textContent = "Enter number of related users.";
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
