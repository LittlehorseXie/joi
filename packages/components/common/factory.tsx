import React from "react";
import { Slot } from "./slot";

const NODES = ["div", "button"] as const;

interface KupForwardRefComponent<E extends React.ElementType>
	extends React.ForwardRefExoticComponent<KupPropsWithRef<E>> {}

type Kups = { [E in (typeof NODES)[number]]: KupForwardRefComponent<E> };

type KupPropsWithRef<E extends React.ElementType> =
	React.ComponentPropsWithRef<E> & {
		asChild?: boolean;
	};

export const Kup = NODES.reduce((kup, node) => {
	const Node = React.forwardRef(
		(props: KupPropsWithRef<typeof node>, forwardedRef: any) => {
			const { asChild, ...kupProps } = props;
			const Comp: any = asChild ? Slot : node;
			return <Comp {...kupProps} ref={forwardedRef} />;
		}
	);

	Node.displayName = `Kup.${node}`;
	return { ...kup, [node]: Node };
}, {} as Kups);
