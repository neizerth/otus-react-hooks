import { memo, useEffect, useRef } from "react";

export interface ScrollDisplayProps {
	children: React.ReactNode;
	offsetBottom?: number;
	onShow: () => void;
	onHide: () => void;
}

export default function ScrollDisplay({
	children,
	offsetBottom = 0,
	onShow,
	onHide,
}: ScrollDisplayProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = () => {
			const node = ref.current;
			if (!node) return;

			const { innerHeight } = window;
			const { bottom } = node.getBoundingClientRect();

			if (bottom >= innerHeight - offsetBottom) {
				onHide();
			} else {
				onShow();
			}
		};
		window.addEventListener("scroll", handler);
		return () => {
			window.removeEventListener("scroll", handler);
		};
	}, [onShow, onHide, offsetBottom]);
	return <div ref={ref}>{children}</div>;
}

export const ScrollDisplayMemo = memo(ScrollDisplay);
