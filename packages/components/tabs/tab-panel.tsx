import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { useTabsContext } from "./use-tabs-context";

export interface TabPanelProps extends HTMLKupProps<"div", {}> {
	value: string;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
	(props, ref) => {
		const { lazyMount, ...api } = useTabsContext();
		const { needRender, ...restProps } = api.getTabPanelProps(props, ref);

		if (!needRender) {
			return null;
		}

		return (
			<Kup.div
				{...restProps}
				ref={ref}
				className={cx("kup-tabs__panel", props.className)}
			/>
		);
	}
);

TabPanel.displayName = "TabPanel";
