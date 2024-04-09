export const createAnatomy = (name: string, parts: string[]) => ({
	parts: (...values) => {
		if (isEmpty(parts)) {
			return createAnatomy(name, values);
		}
		throw new Error(
			"createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...)"
		);
	},
	build: () =>
		[...new Set(parts)].reduce(
			(prev, part) =>
				Object.assign(prev, {
					[part]: {
						selector: [
							`&[data-scope="${toKebabCase(
								name
							)}"][data-part="${toKebabCase(part)}"]`,
						].join(", "),
						attrs: {
							"data-scope": toKebabCase(name),
							"data-part": toKebabCase(part),
						},
					},
				}),
			{}
		),
});

const toKebabCase = (value: string) =>
	value
		.replace(/([A-Z])([A-Z])/g, "$1-$2")
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();

const isEmpty = <T>(v: T[]): boolean => v.length === 0;
