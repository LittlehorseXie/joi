import React, { forwardRef } from "react";
import { cx } from "../common/cx";
import { type HTMLKupProps } from "../common/factory.type";
import { Kup } from "../common/factory";
import { useTabsContext } from "./use-tabs-context";

export interface TabListProps extends HTMLKupProps<"div", {}> {}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
	(props, ref) => {
		const api = useTabsContext();

		return (
			<Kup.div
				{...api.getTabListProps(props, ref)}
				ref={ref}
				className={cx("kup-tabs__list", props.className)}
			/>
		);
	}
);

TabList.displayName = "TabList";
