import { useCallback, useState } from "react";
import "./App.css";
import { ScrollDisplayMemo } from "./hooks/use-effect/ScrollDisplay";

function App() {
	const [counter, setCounter] = useState(0);

	const onShow = useCallback(() => {
		console.log("show");
	}, []);

	const onHide = useCallback(() => {
		console.log("hide");
	}, []);

	return (
		<section>
			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
			<div
				style={{ height: "150vh", width: "100%", backgroundColor: "lightblue" }}
			/>
			<ScrollDisplayMemo offsetBottom={100} onShow={onShow} onHide={onHide}>
				<div>
					<h1>Hello</h1>
				</div>
			</ScrollDisplayMemo>
		</section>
	);
}

export default App;
