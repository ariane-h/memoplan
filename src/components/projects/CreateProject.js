import React, { Component } from "react";

export class CreateProject extends Component {
	state = {
		title: "",
		content: "",
	};
	render() {
		return (
			<div className="container">
				<form className="white">
					<h5 className="grey-text text-darken-3">Create a Project</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" />
					</div>
					<div className="input-field">
						<label htmlFor="content">Content</label>
						<textarea className="materialize-textarea" id="content"></textarea>
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

export default CreateProject;
