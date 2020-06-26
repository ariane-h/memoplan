import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = ({ auth, profile }) => {
	const links = auth.uid ? (
		<SignedInLinks profile={profile} />
	) : (
		<SignedOutLinks />
	);
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<div className="hide-on-small-only">
					<Link to="/" className="brand-logo left">
						memo plan
					</Link>
					{links}
				</div>

				<div className="hide-on-med-and-up">
					<Link to="/" className="left ">
						<h5>memo plan</h5>
					</Link>
					{links}
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(NavBar);
