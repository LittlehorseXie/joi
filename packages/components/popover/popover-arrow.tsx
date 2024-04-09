import React from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverArrowProps extends HTMLKupProps<"div", {}> {
	width?: number;
	height?: number;
}

export const PopoverArrow = (props: PopoverArrowProps) => {
	const api = usePopoverContext();

	return (
		<Kup.div
			{...api.getArrowProps()}
			className={cx("kup-popover__arrow", props.className)}
		>
			<Kup.div
				{...api.getArrowInnerProps(props)}
				className={cx("kup-popover__arrow-inner")}
			/>
		</Kup.div>
	);
};

PopoverArrow.displayName = "PopoverArrow";
