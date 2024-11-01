export interface Option {
	[key: string]: string;
}

export interface Restriction {
	name: string;
	description: string;
	escalation: string;
	options: Option | null;
	inputs: number | null;
	addMoreButton: boolean;
	optionsPreset?: string;
	extraInputDescription?: string;
}
