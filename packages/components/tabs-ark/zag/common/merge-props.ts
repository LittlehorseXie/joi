export const mergeProps = (...args) => {
	let result = {};
	for (let props of args) {
		for (let key in props) {
			if (result[key] === undefined) {
				result[key] = props[key];
			}
		}
	}
	return result;
};
