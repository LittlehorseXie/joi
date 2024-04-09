import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverPopperProps extends HTMLKupProps<"div", {}> {
	placement?:
		| "top-start"
		| "top"
		| "top-end"
		| "right-start"
		| "right"
		| "right-end"
		| "bottom-start"
		| "bottom"
		| "bottom-end"
		| "left-start"
		| "left"
		| "left-end";
}

export const PopoverPopper = forwardRef<HTMLDivElement, PopoverPopperProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getPopperProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__popper", props.className)}
			/>
		);
	}
);

PopoverPopper.displayName = "PopoverPopper";
