import React, { forwardRef } from "react";
import { cx } from "../common/cx";
import { type HTMLKupProps } from "../common/factory.type";
import { Kup } from "../common/factory";

export interface TabIndicatorProps extends HTMLKupProps<"div", {}> {}

export const TabIndicator = forwardRef<HTMLDivElement, TabIndicatorProps>(
	(props, ref) => {
		return (
			<Kup.div
				{...props}
				ref={ref}
				className={cx("kup-tabs__tab-indicator", props.className)}
			/>
		);
	}
);

TabIndicator.displayName = "TabIndicator";
