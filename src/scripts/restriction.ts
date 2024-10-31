export interface Choices {
	[key: string]: Array<string>;
}

export interface Options {
	code?: string;
	description?: string;
	escalation?: string;
	optionDesc?: string | false;
	options?: Choices | null;
	numOfInputs?: number;
	addMoreButton?: boolean;
}

export default class Restriction {
	code: string;
	description: string;
	escalation: string;
	optionDesc?: string | false;
	options: Choices | null;
	numOfInputs: number | false;
	addMoreButton: boolean;

	constructor({
		code = "sa1",
		description = "Sample Restriction",
		escalation = "Suspicious Activity 1",
		optionDesc = false,
		options = null,
		numOfInputs = 0,
		addMoreButton = false,
	}: Options = {}) {
		this.code = code;
		this.description = description;
		this.escalation = escalation;
		this.optionDesc = optionDesc;
		this.options = options;
		this.numOfInputs = numOfInputs;
		this.addMoreButton = addMoreButton;
		this.addToRestrictions();
	}

	addToRestrictions() {
		Restrictions[this.code] = this;
	}

	removeFromRestrictions() {
		delete Restrictions[this.code];
	}
}

export const Restrictions: { [key: string]: Restriction } = {};

export const getRestrictions = () => {
	return Restrictions;
};

// Creating restrictions
new Restriction({
	code: "threshold",
	description: "More than threshold",
	escalation: "More than thresold escalation",
	optionDesc: "Account Status",
	options: {
		option1: ["VIP", "wd greater than 25k"],
		option2: ["Not VIP", "wd greater than 24.999.99"],
	},
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "accountStatus",
	description: "Account is Suspended/Closed",
	escalation: "account is suspended or closed based on selection",
	optionDesc: "Account Status",
	options: {
		option1: ["Closed", "account status is closed"],
		option2: ["Suspended", "account is suspended"],
		option3: ["Time Out", "account is in time out"],
	},
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "sa1",
	description: "Suspicious Activity 1",
	escalation: "Suspicious Activity 1 escal",
	options: null,
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "sa2",
	description: "Suspicious Activity 2",
	escalation: "Suspicious Activity 2 escal",
	options: null,
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "sa3",
	description: "Suspicious Activity 3",
	escalation: "Suspicious Activity 3 escal",
	options: null,
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "emailMismatch",
	description: "Email mismatch",
	escalation: "account less than 1 month old with email name mismatch",
	optionDesc: "Account Status",
	options: null,
	numOfInputs: 0,
	addMoreButton: false,
});

new Restriction({
	code: "njClient",
	description: "NJ Client is withdrawing on a Licensed state such as PA/WV",
	escalation: "NJ Client is withdrawing on a Licensed state",
	optionDesc: "Client Withdrawal State",
	options: {
		option1: ["PA", "NJ Client withdrawing in PA - No License"],
		option2: ["WV", "NJ Client withdrawing in WV - No License"],
	},
	numOfInputs: 0,
	addMoreButton: false,
});
