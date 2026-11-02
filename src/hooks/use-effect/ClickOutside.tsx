import { Children, useEffect, useState } from "react";

interface ClickOutsideProps {
	children: React.ReactNode;
	onClickOutside: () => void;
}

/**
 * <ClickOutside onClickOutside={() => {}}>
 * 	<div>Click outside</div>
 * </ClickOutside>
 *
 */
export default function ClickOutside({
	children,
	onClickOutside,
}: ClickOutsideProps) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				event.target instanceof Node &&
				!event.target.contains(event.target)
			) {
				onClickOutside();
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [onClickOutside]);

	return children;
}
