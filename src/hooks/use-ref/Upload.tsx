import { useRef } from "react";

interface UploadProps {
	onUpload: (file: FileList | null) => void;
	children: React.ReactNode;
}

export default function Upload({ onUpload, children }: UploadProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const getInfo = () => {
		if (inputRef.current) {
			console.log(inputRef.current.files);
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<input
				type="file"
				style={{
					opacity: 0.001,
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				onChange={(e) => {
					onUpload(e.target.files);
				}}
				ref={inputRef}
			/>
			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: "lightblue",
				}}
			>
				{children}
			</div>
			<button onClick={getInfo}>Get File info</button>
		</div>
	);
}
