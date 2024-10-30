interface Options {
	code?: string;
	description?: string;
	escalation?: string;
	optionDesc?: string | null;
	options?: Object | null;
	numOfInputs?: number | null;
	addMoreButton?: boolean;
}

export default class Restriction {
	code: string;
	description: string;
	escalation: string;
	optionDesc?: string | null;
	options: Object | null;
	numOfInputs: number | null;
	addMoreButton: boolean;

	constructor({
		code = "sa1",
		description = "Sample Restriction",
		escalation = "Suspicious Activity 1",
		optionDesc = null,
		options = null,
		numOfInputs = null,
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
	numOfInputs: null,
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
	},
	numOfInputs: null,
	addMoreButton: false,
});

new Restriction({
	code: "sa1",
	description: "Suspicious Activity 1",
	escalation: "Suspicious Activity 1 escal",
	options: null,
	numOfInputs: null,
	addMoreButton: false,
});

new Restriction({
	code: "sa2",
	description: "Suspicious Activity 2",
	escalation: "Suspicious Activity 2 escal",
	options: null,
	numOfInputs: null,
	addMoreButton: false,
});

new Restriction({
	code: "sa3",
	description: "Suspicious Activity 3",
	escalation: "Suspicious Activity 3 escal",
	options: null,
	numOfInputs: null,
	addMoreButton: false,
});
