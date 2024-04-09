class Machine {
	constructor(config) {}

	public start = () => {};

	public stop = () => {};

	public send = () => {};
}

export const createMachine = (config) => new Machine(config);
