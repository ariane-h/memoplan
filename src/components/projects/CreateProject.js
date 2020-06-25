import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

export class CreateProject extends Component {
	state = {
		title: "",
		content: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createProject(this.state);
	};
	render() {
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Create a Project</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Content</label>
						<textarea
							className="materialize-textarea"
							id="content"
							onChange={this.handleChange}
						></textarea>
					</div>
					<div>
						<button className="btn z-depth-0 purple lighten-2 white-text">
							Save
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const title = state.title;
	const content = state.content;
	return {
		title: title,
		content: content,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
