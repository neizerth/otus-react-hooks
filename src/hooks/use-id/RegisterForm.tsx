import { useId } from "react";

export default function RegisterForm() {
	const userId = useId();
	const passwordId = useId();

	return (
		<form>
			<div>
				<label htmlFor={userId}>Username</label>
				<input type="text" placeholder="Username" id={userId} />
			</div>
			<div>
				<label htmlFor={passwordId}>Password</label>
				<input type="password" placeholder="Password" id={passwordId} />
			</div>
			<button type="submit">Register</button>
		</form>
	);
}
