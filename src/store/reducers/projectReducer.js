const initState = {
	projects: [
		{ id: "1", title: "find a new coffee brand", content: "blah blah blah" },
		{ id: "2", title: "submit the homework", content: "blah blah blah" },
		{ id: "3", title: "declutter workspace", content: "blah blah blah" },
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_PROJECT":
			console.log("created project");
			return state;
		case "CREATE_PROJECT_ERROR":
			console.log("create project error");
			return state;
		default:
			return state;
	}
};

export default projectReducer;
