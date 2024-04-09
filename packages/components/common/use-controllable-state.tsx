import { useCallback, useState } from "react";

interface UseControllableStateProps<T> {
	value?: T;
	defaultValue?: T;
	onChange?: (v: T) => void;
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
	const { value, defaultValue, onChange } = props;
	const [uncontrolledData, setUncontrolledData] = useState(defaultValue);
	const controlled = value !== undefined;

	const data = controlled ? value : uncontrolledData;
	const setData = useCallback(
		(next: any) => {
			const nextData = typeof next === "function" ? next(data) : next;

			if (!controlled) {
				setUncontrolledData(nextData);
			}
			onChange?.(nextData);
		},
		[controlled, data, onChange]
	);

	return [data, setData] as [T, React.Dispatch<React.SetStateAction<T>>];
}
