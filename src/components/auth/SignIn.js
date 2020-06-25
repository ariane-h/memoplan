import React, { Component } from "react";

export class SignIn extends Component {
	render() {
		return (
			<div className="container">
				<form className="white">
					<h5 className="grey-text text-darken-3">Log In</h5>
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

export default SignIn;
