import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/layout/NavBar";
import Dashboard from "../src/components/dashboard/Dashboard";
import ProjectDetails from "../src/components/projects/ProjectDetails";
import SignIn from "../src/components/auth/SignIn";
import SignUp from "../src/components/auth/SignUp";
import CreateProject from "../src/components/projects/CreateProject";
import EditProject from "../src/components/projects/EditProject";

function App() {
	return (
		<BrowserRouter>
			<div className="App"></div>

			<NavBar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/project/:id" component={ProjectDetails} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/create" component={CreateProject} />
				<Route path="/projects/:id/edit" component={EditProject} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
