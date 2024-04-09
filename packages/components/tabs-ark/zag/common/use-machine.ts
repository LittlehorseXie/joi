import { useService } from "./use-service";
import { useSnapshot } from "./use-snapshot";

export const useMachine = (machine, options) => {
	const service = useService(machine, options);
	const state = useSnapshot(service, options);
	return [state, service.send, service] as const;
};
