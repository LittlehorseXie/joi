import React, { forwardRef } from "react";
import { type HTMLKupProps } from "../common/factory.type";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { useTabsContext } from "./use-tabs-context";

export interface TabPanelsProps extends HTMLKupProps<"div", {}> {}

export const TabPanels = forwardRef<HTMLDivElement, TabPanelsProps>(
	(props, ref) => {
		const api = useTabsContext();

		return (
			<Kup.div
				{...api.getTabPanelsProps(props, ref)}
				ref={ref}
				className={cx("kup-tabs__panels", props.className)}
			/>
		);
	}
);

TabPanels.displayName = "TabPanels";
