import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
	return (
		<nav className="nav-wrapper teal darken-2">
			<div className="container">
				<Link to="/" className="brand-logo left">
					memo plan
				</Link>
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default NavBar;
