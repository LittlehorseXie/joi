import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { usePopoverContext } from "./use-popover-context";

export interface PopoverBodyProps extends HTMLKupProps<"div", {}> {}

export const PopoverBody = forwardRef<HTMLDivElement, PopoverBodyProps>(
	(props, ref) => {
		const api = usePopoverContext();

		return (
			<Kup.div
				{...api.getBodyProps(props, ref)}
				ref={ref}
				className={cx("kup-popover__body", props.className)}
			/>
		);
	}
);

PopoverBody.displayName = "PopoverBody";
