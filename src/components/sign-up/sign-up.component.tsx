import { useState } from "react";
import { FirebaseError } from "firebase/app";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-up.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
			alert("User created successfully");
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code === "auth/email-already-in-use") {
					alert("Cannot create user, email already in use");
				} else {
					console.log("user creation encountered an error", error);
				}
			}
		}
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">Display Name</label>
				<input
					type="text"
					required
					onChange={handleChage}
					value={displayName}
					name="displayName"
				/>

				<label htmlFor="">Email</label>
				<input
					type="email"
					required
					onChange={handleChage}
					value={email}
					name="email"
				/>

				<label htmlFor="">Password</label>
				<input
					type="password"
					required
					onChange={handleChage}
					value={password}
					name="password"
				/>

				<label htmlFor="">Confirm Password</label>
				<input
					type="password"
					required
					onChange={handleChage}
					value={confirmPassword}
					name="confirmPassword"
				/>

				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default SignUp;
