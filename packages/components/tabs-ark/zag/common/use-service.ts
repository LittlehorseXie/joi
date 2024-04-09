import { useEffect, useRef } from "react";

export const useService = (machine, options) => {
	const service = useRef(typeof machine === "function" ? machine() : machine);

	useEffect(() => {
		service.current.start();
		return () => {
			service.current.stop();
		};
	}, []);

	return service.current;
};
