import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverContentProps extends HTMLKupProps<"div", {}> {}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getContentProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__content", props.className)}
			/>
		);
	}
);

PopoverContent.displayName = "PopoverContent";
