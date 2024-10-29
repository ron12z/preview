interface Options {
	code?: string;
	description?: string;
	escalation?: string;
	options?: string[] | null;
	numOfInputs?: number | null;
	addMoreButton?: boolean;
}

class Restriction {
	code: string;
	description: string;
	escalation: string;
	options: string[] | null;
	numOfInputs: number | null;
	addMoreButton: boolean;

	constructor({
		code = "sa1",
		description = "Sample Restriction",
		escalation = "Suspicious Activity 1",
		options = null,
		numOfInputs = null,
		addMoreButton = false,
	}: Options = {}) {
		this.code = code;
		this.description = description;
		this.escalation = escalation;
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

const Restrictions: { [key: string]: Restriction } = {};

export const getRestrictions = () => {
	return Restrictions;
};

export default Restriction;

// Creating restrictions
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
	code: "threshold",
	description: "Threshold",
	escalation: "Threshold escal",
	options: null,
	numOfInputs: null,
	addMoreButton: false,
});
