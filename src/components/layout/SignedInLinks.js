import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
	return (
		<div>
			<ul className="className right">
				<li>
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li>
					<a href="/">Log Out</a>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating teal-lighten-2 z-depth-0">
						AB
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
