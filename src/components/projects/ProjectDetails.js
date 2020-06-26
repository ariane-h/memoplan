import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { Redirect } from "react-router-dom";

const ProjectDetails = ({ project, auth, id }) => {
	if (!auth.uid) return <Redirect to="/signin" />;

	if (project) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{project.title}</span>
						<p>{project.content}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							posted by: {project.authorFirstName} {project.authorLastName}
						</div>
						<div>{moment(project.createdAt.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <p> project loading...</p>;
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;

	return {
		project: project,
		id: id,
		auth: state.firebase.auth,
	};
};

const mapFirestoreToProps = firestoreConnect([
	{
		collection: "projects",
	},
]);

export default compose(
	connect(mapStateToProps),
	mapFirestoreToProps
)(ProjectDetails);
