import { TabContent } from "./tab-content";
import { TabIndicator } from "./tab-indicator";
import { TabList } from "./tab-list";
import { TabTrigger } from "./tab-trigger";
import { TabRoot } from "./tab-root";
// import { TabsContext, type TabsContextProps } from './tabs-context'
// import { useTabsContext, type UseTabsContext } from './use-tabs-context'

const Tabs = {
	Content: TabContent,
	Indicator: TabIndicator,
	List: TabList,
	Root: TabRoot,
	Trigger: TabTrigger, // Context
};

export default Tabs;
