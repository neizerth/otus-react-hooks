import { useState } from "react";

export default function Playground() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div>
			<h3>State Switch</h3>
			<button onClick={() => setEnabled(!enabled)}>Toggle</button>
		</div>
	);
}
