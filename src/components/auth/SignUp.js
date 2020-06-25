import React, { Component } from "react";

export class SignUp extends Component {
	render() {
		return (
			<div className="container">
				<form className="white">
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="text" id="password" />
					</div>
					<div>
						<button className="btn z-depth-0 purple lighten-2 white-text">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
