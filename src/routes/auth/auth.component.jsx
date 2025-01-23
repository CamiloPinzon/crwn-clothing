import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const AuthPage = () => {
	const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Auth</h1>
			<button onClick={logGoogleUser}>Sign In With Google Popup</button>
		</div>
	);
};

export default AuthPage;
