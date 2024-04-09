import { useTabsContext } from "./use-tabs-context";

export const TabList = (props) => {
	const context = useTabsContext();
	console.log(1, context);
	return <div {...props} />;
};
