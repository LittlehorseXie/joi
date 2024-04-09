import { TabsRoot, type TabsProps } from "./tabs-root";
import { TabList, type TabListProps } from "./tab-list";
import { TabTrigger, type TabTriggerProps } from "./tab-trigger";
import { TabIndicator, type TabIndicatorProps } from "./tab-indicator";
import { TabPanels, type TabPanelsProps } from "./tab-panels";
import { TabPanel, type TabPanelProps } from "./tab-panel";

const Tabs = {
	Root: TabsRoot,
	List: TabList,
	Trigger: TabTrigger,
	Indicator: TabIndicator,
	Panels: TabPanels,
	Panel: TabPanel,
};

export default Tabs;

export type {
	TabsProps,
	TabListProps,
	TabTriggerProps,
	TabIndicatorProps,
	TabPanelsProps,
	TabPanelProps,
};

export { makeTabTriggerId, makeTabPanelId } from "./use-tabs";
