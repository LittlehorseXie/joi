import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverTriggerProps extends HTMLKupProps<"div", {}> {}

export const PopoverTrigger = forwardRef<HTMLDivElement, PopoverTriggerProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getTriggerProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__trigger", props.className)}
			/>
		);
	}
);

PopoverTrigger.displayName = "PopoverTrigger";
