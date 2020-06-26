import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

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
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="text" id="password" onChange={this.handleChange} />
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

const mapStateToProps = (state) => {
	console.log(state);
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
