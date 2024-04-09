import { TabsProvider } from "./use-tabs-context";
import useTabs from "./use-tabs";

export const TabRoot = (props) => {
	const context = useTabs();
	return (
		<TabsProvider value={context}>
			<div {...props} />
		</TabsProvider>
	);
};
