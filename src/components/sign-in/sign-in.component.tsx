import { useState } from "react";
import { FirebaseError } from "firebase/app";

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};
const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInAuthUserWithEmailAndPassword(email, password);
		} catch (error) {
			if (error instanceof FirebaseError) {
				if (error.code === "auth/invalid-credential") {
					alert("Invalid credentials ckeck you email and password");
				} else {
					alert(`user creation encountered an error: ${error}`);
				}
			}
		}
	};

	const signInWithGoogle = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			await createUserDocumentFromAuth(user);
		} catch (error) {
			console.error("Error signing in with Google", error);
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					label="Email"
					name="email"
					value={email}
					onChange={handleChage}
					required
				/>
				<FormInput
					type="password"
					label="Password"
					name="password"
					value={password}
					onChange={handleChage}
					required
				/>
				<div className="buttosn-container">
					<Button buttonType="default" type="submit">
						Sign In
					</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>
						Sign In with google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
