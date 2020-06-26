import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Log In</h5>
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
					<div>
						<button className="btn z-depth-0 purple lighten-2 white-text">
							Submit
						</button>
					</div>
					<div className="red-text center">
						{authError ? <p>{authError}</p> : null}
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};

const mapDispatchTopProps = (dispatch) => {
	return {
		signIn: (credentials) => dispatch(signIn(credentials)),
	};
};

export default connect(mapStateToProps, mapDispatchTopProps)(SignIn);
