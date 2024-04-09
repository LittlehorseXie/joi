import React, { forwardRef } from "react";
import { cx } from "../common/cx";
import { type HTMLKupProps } from "../common/factory.type";
import { PopoverProvider } from "./use-popover-context";
import { Kup } from "../common/factory";
import { usePopover, type UsePopoverProps } from "./use-popover";

export interface PopoverProps extends HTMLKupProps<"div", UsePopoverProps> {}

export const PopoverRoot = forwardRef<HTMLDivElement, PopoverProps>(
	(props, ref) => {
		const { children, ...restProps } = props;
		const context = usePopover(restProps);
		return <PopoverProvider value={context}>{children}</PopoverProvider>;
	}
);

PopoverRoot.displayName = "PopoverRoot";
