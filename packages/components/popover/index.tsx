import { PopoverRoot, type PopoverProps } from "./popover-root";
import { PopoverTrigger, type PopoverTriggerProps } from "./popover-trigger";
import { PopoverPopper, type PopoverPopperProps } from "./popover-popper";
import { PopoverArrow, type PopoverArrowProps } from "./popover-arrow";
import { PopoverContent, type PopoverContentProps } from "./popover-content";
import { PopoverHeader, type PopoverHeaderProps } from "./popover-header";
import { PopoverBody, type PopoverBodyProps } from "./popover-body";
import { PopoverFooter, type PopoverFooterProps } from "./popover-footer";
import {
	PopoverCloseTrigger,
	type PopoverCloseTriggerProps,
} from "./popover-close-trigger";

const Popover = {
	Root: PopoverRoot,
	Trigger: PopoverTrigger,
	Popper: PopoverPopper,
	Arrow: PopoverArrow,
	Content: PopoverContent,
	Header: PopoverHeader,
	Body: PopoverBody,
	Footer: PopoverFooter,
	CloseTrigger: PopoverCloseTrigger,
};

export default Popover;

export type {
	PopoverProps,
	PopoverTriggerProps,
	PopoverPopperProps,
	PopoverArrowProps,
	PopoverContentProps,
	PopoverHeaderProps,
	PopoverBodyProps,
	PopoverFooterProps,
	PopoverCloseTriggerProps,
};

export { makePopoverPrimitiveId } from "./use-popover";
