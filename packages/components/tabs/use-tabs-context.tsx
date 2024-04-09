import { createContext, useContext } from "react";
import { UseTabsReturn } from "./use-tabs";

const TabsContext = createContext({} as UseTabsReturn);

TabsContext.displayName = "TabsContext";

export const useTabsContext = () => {
	const context = useContext(TabsContext);
	return context;
};

export const TabsProvider = TabsContext.Provider;
