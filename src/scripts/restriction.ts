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
	}

	addToRestrictions() {
		Restrictions[this.code] = this.description;
	}

	removeFromRestrictions() {
		delete Restrictions[this.code];
	}
}

const Restrictions: { [key: string]: string } = {};

export default Restriction;
