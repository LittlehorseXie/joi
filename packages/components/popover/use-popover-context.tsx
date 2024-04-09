import { createContext, useContext } from "react";
import { UsePopoverReturn } from "./use-popover";

const PopoverContext = createContext({} as UsePopoverReturn);

PopoverContext.displayName = "PopoverContext";

export const usePopoverContext = () => {
	const context = useContext(PopoverContext);
	return context;
};

export const PopoverProvider = PopoverContext.Provider;
