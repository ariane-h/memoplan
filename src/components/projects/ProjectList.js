import React from "react";
import ProjectSummary from "../projects/ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = () => {
	return (
		<div className="project-list section">
			<Link to="/project/:id">
				<ProjectSummary />
			</Link>
			<Link to="/project/:id">
				<ProjectSummary />
			</Link>
			<Link to="/project/:id">
				<ProjectSummary />
			</Link>
		</div>
	);
};

export default ProjectList;
