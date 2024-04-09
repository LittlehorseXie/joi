import { createContext, useContext } from "react";

const TabsContext = createContext(undefined);

export const useTabsContext = () => {
	const context = useContext(TabsContext);
	return context;
};

export const TabsProvider = TabsContext.Provider;
