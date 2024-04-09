import type { ComponentPropsWithRef, ElementType } from "react";

export type Assign<T, U> = {
	[K in keyof T]: K extends keyof U ? U[K] : T[K];
} & U;

export type HTMLKupProps<
	T extends ElementType,
	K extends Record<string, any>
> = Assign<ComponentPropsWithRef<T>, K>;
