import { Outlet, Link } from "react-router-dom";

import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
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
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
