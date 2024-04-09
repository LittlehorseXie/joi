import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverCloseTriggerProps extends HTMLKupProps<"div", {}> {}

export const PopoverCloseTrigger = forwardRef<
	HTMLDivElement,
	PopoverCloseTriggerProps
>((props, ref) => {
	const api = usePopoverContext();

	return (
		<Kup.div
			{...api.getCloseTriggerProps(props, ref)}
			ref={ref}
			className={cx("kup-popover__close", props.className)}
		/>
	);
});

PopoverCloseTrigger.displayName = "PopoverCloseTrigger";
