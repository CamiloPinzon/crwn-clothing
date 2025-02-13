import { useState } from "react";
import { FirebaseError } from "firebase/app";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

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
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sing Up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					required={true}
					onChange={handleChage}
					value={displayName}
					name="displayName"
					label="Display Name"
				/>

				<FormInput
					type="email"
					required={true}
					onChange={handleChage}
					value={email}
					name="email"
					label="Email"
				/>

				<FormInput
					type="password"
					required
					onChange={handleChage}
					value={password}
					name="password"
					label="Password"
				/>

				<FormInput
					type="password"
					required
					onChange={handleChage}
					value={confirmPassword}
					name="confirmPassword"
					label="Confirm Password"
				/>

				<Button type="submit" buttonType="default">
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUp;
