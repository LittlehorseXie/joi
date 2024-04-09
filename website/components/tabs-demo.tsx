import { memo, useCallback, useEffect, useRef, useState } from "react";
import Tabs, { makeTabTriggerId } from "joi-ui/tabs";
import "./tabs-demo.css";

function TabsDemo() {
	const tabsKupRef = useRef<HTMLDivElement>(null);
	const [rect, setRect] = useState({ left: 0, width: 0 });
	const [hasMeasured, setHasMeasured] = useState(false);

	useEffect(() => {
		handleIndicator("react");
		const aid = requestAnimationFrame(() => {
			setHasMeasured(true);
		});
		return () => {
			if (aid) {
				cancelAnimationFrame(aid);
			}
		};
	}, []);

	const handleIndicator = useCallback(
		(v: string) => {
			if (tabsKupRef.current?.id) {
				const activeTabId = makeTabTriggerId(tabsKupRef.current?.id, v);
				const activeTab =
					tabsKupRef.current.ownerDocument.getElementById(
						activeTabId
					);
				if (activeTab) {
					console.log(
						"activeTab = ",
						hasMeasured,
						activeTabId,
						activeTab
					);
					setRect({
						left: activeTab.offsetLeft,
						width: activeTab.offsetWidth,
					});
				}
			}
		},
		[tabsKupRef.current]
	);

	return (
		<>
			<h3 style={{ fontWeight: 500, fontSize: 20 }}>Tabs</h3>
			<Tabs.Root
				style={{ position: "relative" }}
				ref={tabsKupRef}
				defaultValue='react'
				onValueChange={(v) => {
					console.log("Tabs onValueChange = ", v);
					handleIndicator(v);
				}}
				lazyMount
			>
				<Tabs.List style={{ marginTop: 10, marginBottom: 10 }}>
					<Tabs.Trigger value='react'>React</Tabs.Trigger>
					<Tabs.Trigger value='vue'>Vue</Tabs.Trigger>
					<Tabs.Trigger value='svelte' disabled>
						Svelte
					</Tabs.Trigger>
					<Tabs.Trigger value='solid'>Solid</Tabs.Trigger>
					<Tabs.Indicator
						style={{
							position: "absolute",
							height: "6px",
							transitionProperty:
								"left, right, top, bottom, height, width",
							transitionDuration: hasMeasured ? "200ms" : "0ms",
							transitionTimingFunction:
								"cubic-bezier(0, 0, 0.2, 1)",
							backgroundColor: "black",
							...rect,
						}}
					/>
				</Tabs.List>
				<Tabs.Panels>
					<Tabs.Panel value='react'>React Content</Tabs.Panel>
					<Tabs.Panel value='vue'>Vue Content</Tabs.Panel>
					<Tabs.Panel value='solid'>Solid Content</Tabs.Panel>
				</Tabs.Panels>
			</Tabs.Root>
		</>
	);
}

export default memo(TabsDemo);
