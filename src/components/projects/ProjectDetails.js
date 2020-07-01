import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { deleteProject } from "../../store/actions/projectActions";

const ProjectDetails = (props) => {
	const { project, auth, id } = props;

	if (!auth.uid) return <Redirect to="/signin" />;

	const handleDelete = (event) => {
		event.preventDefault();
		props.deleteProject(id);
		props.history.push("/");
	};

	const editDeleteButtons =
		project && auth.uid ? (
			project.authorId === auth.uid ? (
				<div className="card-action grey lighten-4 row form-buttons">
					<div className="form-button">
						<a
							href={`/projects/${id}/edit`}
							className="btn z-depth-0 purple lighten-2 white-text"
						>
							Edit
						</a>
					</div>

					<div className="form-button">
						<button
							className="btn z-depth-0 red lighten-2 white-text"
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
				</div>
			) : null
		) : null;

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
					{editDeleteButtons}
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

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (id) => dispatch(deleteProject(id)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	mapFirestoreToProps
)(ProjectDetails);
