import { ReactNode, useId } from "react";
import { useControllableState } from "../common/use-controllable-state";
import { PopoverTriggerProps } from "./popover-trigger";
import { PopoverPopperProps } from "./popover-popper";
import { PopoverArrowProps } from "./popover-arrow";
import { PopoverContentProps } from "./popover-content";
import { PopoverHeaderProps } from "./popover-header";
import { PopoverBodyProps } from "./popover-body";
import { PopoverFooterProps } from "./popover-footer";
import { PopoverCloseTriggerProps } from "./popover-close-trigger";

export const TRIGGER = {
	click: "click",
	hover: "hover",
} as const;

export interface UsePopoverProps {
	id?: string;
	trigger?: keyof typeof TRIGGER;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	getRootNode?: () => ReactNode;
}

export const usePopover = (props: UsePopoverProps) => {
	const { trigger = TRIGGER.click } = props;

	const [open, setOpen] = useControllableState<boolean>({
		defaultValue: props.defaultOpen,
		value: props.open,
		onChange: props.onOpenChange,
	});

	const uuid = useId();
	const uid = props.id ?? uuid;
	const id = `popover-${uid}`;

	const getTriggerProps = (props: PopoverTriggerProps, ref: any) => {
		return {
			...props,
			id: makePopoverPrimitiveId(id, "trigger"),
		};
	};

	const getPopperProps = (props: PopoverPopperProps, ref: any) => {
		return { ...props };
	};

	const getArrowProps = () => {
		return { ...props };
	};

	const getArrowInnerProps = (props: PopoverArrowProps) => {
		const { width, height } = props;
		return { ...props };
	};

	const getContentProps = (props: PopoverContentProps, ref: any) => {
		return {
			...props,
			id: makePopoverPrimitiveId(id, "content"),
		};
	};

	const getHeaderProps = (props: PopoverHeaderProps, ref: any) => {
		return { ...props };
	};

	const getBodyProps = (props: PopoverBodyProps, ref: any) => {
		return { ...props };
	};

	const getFooterProps = (props: PopoverFooterProps, ref: any) => {
		return { ...props };
	};

	const getCloseTriggerProps = (
		props: PopoverCloseTriggerProps,
		ref: any
	) => {
		return { ...props };
	};

	return {
		open,
		getTriggerProps,
		getPopperProps,
		getArrowProps,
		getArrowInnerProps,
		getContentProps,
		getHeaderProps,
		getBodyProps,
		getFooterProps,
		getCloseTriggerProps,
	};
};

export type UsePopoverReturn = ReturnType<typeof usePopover>;

export const makePopoverPrimitiveId = (id: string, x: string) => {
	return `${id}--${x}`;
};
