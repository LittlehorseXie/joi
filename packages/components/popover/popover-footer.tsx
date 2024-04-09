import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverFooterProps extends HTMLKupProps<"div", {}> {}

export const PopoverFooter = forwardRef<HTMLDivElement, PopoverFooterProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getFooterProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__footer", props.className)}
			/>
		);
	}
);

PopoverFooter.displayName = "PopoverFooter";
