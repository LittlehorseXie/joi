import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverHeaderProps extends HTMLKupProps<"div", {}> {}

export const PopoverHeader = forwardRef<HTMLDivElement, PopoverHeaderProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getHeaderProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__header", props.className)}
			/>
		);
	}
);

PopoverHeader.displayName = "PopoverHeader";
