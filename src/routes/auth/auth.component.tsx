import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./auth.styles.scss";

const AuthPage = () => {
	return (
		<div className="auth-container">
			<h1>Auth Page</h1>
			<div className="auth-container__forms-container">
				<SignIn />
				<SignUp />
			</div>
		</div>
	);
};

export default AuthPage;
