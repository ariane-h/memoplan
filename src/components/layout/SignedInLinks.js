import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
	return (
		<div>
			<ul className="className right">
				<li>
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li>
					<a href="/signin" onClick={props.signOut}>
						Log Out
					</a>
				</li>
				<li>
					<NavLink
						to="/"
						className="btn btn-floating purple lighten-2 z-depth-0"
					>
						{props.profile.initials}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
