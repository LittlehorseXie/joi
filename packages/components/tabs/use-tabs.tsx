import { useId } from "react";
import { useControllableState } from "../common/use-controllable-state";
import { TabListProps } from "./tab-list";
import { TabTriggerProps } from "./tab-trigger";
import { TabPanelProps } from "./tab-panel";
import { TabPanelsProps } from "./tab-panels";

export interface UseTabsProps {
	id?: string;
	value?: string;
	defaultValue?: string;
	lazyMount?: boolean;
	orientation?: "horizontal" | "vertical";
	onValueChange?: (value: string) => void;
}

export const useTabs = (props: UseTabsProps) => {
	const uuid = useId();
	const uid = props.id ?? uuid;
	const id = `tabs-${uid}`;

	const { orientation, lazyMount } = props;

	const [selectedValue, setSelectedValue] = useControllableState<string>({
		defaultValue: props.defaultValue,
		value: props.value,
		onChange: props.onValueChange,
	});

	const getTabListProps = (props: TabListProps, ref: any) => {
		return {
			...props,
			"data-orientation": orientation,
		};
	};

	const getTabTriggerProps = (props: TabTriggerProps, ref: any) => {
		const { disabled, value } = props;
		const isSelected = value === selectedValue;

		const onClick = () => {
			if (disabled) return;
			setSelectedValue(value);
		};
		return {
			...props,
			id: makeTabTriggerId(id, value),
			"data-selected": isSelected,
			"data-disabled": disabled,
			onClick,
		};
	};

	const getTabPanelsProps = (props: TabPanelsProps, ref: any) => {
		return {
			...props,
			"data-orientation": orientation,
		};
	};

	const getTabPanelProps = (props: TabPanelProps, ref: any) => {
		const { value } = props;
		const isSelected = value === selectedValue;
		return {
			...props,
			id: makeTabPanelId(id, value),
			isSelected,
			hidden: !isSelected,
			needRender: isSelected || lazyMount,
		};
	};

	return {
		id,
		orientation: props.orientation,
		lazyMount: props.lazyMount,
		selectedValue,
		setSelectedValue,
		getTabListProps,
		getTabTriggerProps,
		getTabPanelsProps,
		getTabPanelProps,
	};
};

export type UseTabsReturn = ReturnType<typeof useTabs>;

export function makeTabTriggerId(id: string, value: string) {
	return `${id}--trigger-${value}`;
}

export function makeTabPanelId(id: string, value: string) {
	return `${id}--panel-${value}`;
}
