import { useMachine } from "./zag/common/use-machine";
import * as tabs from "./zag";

const useTabs = () => {
	const [state, send] = useMachine(tabs.machine(), {});
	return tabs.connect(state, send);
};
export default useTabs;
