import React, { forwardRef } from "react";
import { cx } from "../common/cx";
import { type HTMLKupProps } from "../common/factory.type";
import { TabsProvider } from "./use-tabs-context";
import { Kup } from "../common/factory";
import { useTabs, type UseTabsProps } from "./use-tabs";

export interface TabsProps extends HTMLKupProps<"div", UseTabsProps> {}

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
	const {
		id,
		value,
		defaultValue,
		lazyMount = false,
		orientation = "horizontal",
		onValueChange,
		...elementProps
	} = props;
	const context = useTabs({
		id,
		value,
		defaultValue,
		lazyMount,
		orientation,
		onValueChange,
	});
	return (
		<TabsProvider value={context}>
			<Kup.div
				{...elementProps}
				ref={ref}
				id={context.id}
				data-orientation={orientation}
				className={cx("kup-tabs", props.className)}
			/>
		</TabsProvider>
	);
});

TabsRoot.displayName = "TabsRoot";
