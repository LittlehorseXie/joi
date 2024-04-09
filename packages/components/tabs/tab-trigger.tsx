import React, { forwardRef } from "react";
import { cx } from "../common/cx";
import { Kup } from "../common/factory";
import { type HTMLKupProps } from "../common/factory.type";
import { useTabsContext } from "./use-tabs-context";

export interface TabTriggerProps extends HTMLKupProps<"button", {}> {
	value: string;
}

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(
	(props, ref) => {
		const api = useTabsContext();

		return (
			<Kup.button
				{...api.getTabTriggerProps(props, ref)}
				ref={ref}
				className={cx("kup-tabs__tab", props.className)}
			/>
		);
	}
);

TabTrigger.displayName = "TabTrigger";
