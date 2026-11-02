import { useReducer } from "react";

export default function Playground() {
	// const [count, setCount] = useState(defaultValue);

	const [count, dispatch] = useReducer(
		(state: number, action: number) => state + action,
		0,
	);

	return (
		<div>
			<button onClick={() => dispatch(1)}>Increment</button>
			<button onClick={() => dispatch(-1)}>Decrement</button>
			<p>{count}</p>
		</div>
	);
}
