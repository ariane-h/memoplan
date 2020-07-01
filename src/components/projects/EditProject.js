import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateProject } from "../../store/actions/projectActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class EditProject extends Component {
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
		const id = this.props.id;
		this.props.updateProject(id, this.state);
		this.props.history.push("/");
	};
	render() {
		const { auth, project } = this.props;

		if (!auth.uid) return <Redirect to="signin" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Edit project</h5>
					<div className="input-field">
						<label className="active" htmlFor="title">
							Update Title
						</label>
						<input
							placeholder={project && project.title}
							type="text"
							id="title"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field">
						<label className="active" htmlFor="content">
							Update Project Content
						</label>
						<textarea
							id="content"
							className="materialize-textarea"
							placeholder={project && project.content}
							onChange={this.handleChange}
						></textarea>
					</div>
					<div className="input-field">
						<button className="btn purple lighten-2 z-depth-0">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		auth: state.firebase.auth,
		id: id,
		project: project,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProject: (id, project) => dispatch(updateProject(id, project)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{
			collection: "projects",
		},
	])
)(EditProject);
