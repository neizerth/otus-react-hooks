import { useReducer } from "react";

export default function Playground() {
	const [enabled, toggleEnabled] = useReducer(
		(state: boolean) => !state,
		false,
	);

	return (
		<div>
			<button onClick={toggleEnabled}>Toggle</button>
		</div>
	);
}
