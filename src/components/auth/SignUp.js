import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

export class SignUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signUp(this.state);
	};
	render() {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							onChange={this.handleChange}
							required
							minLength="1"
							pattern="\S+"
							title="Characters only please"
						/>
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							id="lastName"
							onChange={this.handleChange}
							required
							minLength="1"
							pattern="\S+"
							title="Characters only please"
						/>
					</div>
					<div>
						<button className="btn z-depth-0 purple lighten-2 white-text">
							Submit
						</button>
					</div>
					<div className="red-text center">
						{authError ? <p>authError</p> : null}
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
