import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import CrownLogo from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<>
			<nav className="navigation">
				<Link className="logo-container" to="/">
					<div className="logo">
						<img src={CrownLogo} alt="CRWN Logo" />
					</div>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutHandler}>
							Sign Out
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							Sign In
						</Link>
					)}
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
