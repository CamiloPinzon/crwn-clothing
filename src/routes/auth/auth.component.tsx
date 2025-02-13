import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUp from "../../components/sign-up/sign-up.component";

const AuthPage = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<>
			<div>
				<h1>Auth</h1>
				<button onClick={logGoogleUser}>Sign In With Google Popup</button>
			</div>
			<div>
				<SignUp />
			</div>
		</>
	);
};

export default AuthPage;
