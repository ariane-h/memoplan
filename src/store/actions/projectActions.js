export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make async call to db
		const firestore = getFirestore();
		firestore
			.collection("projects")
			.add({
				...project,
				authorFirstName: "Daisy",
				authorLastName: "Steiner",
				authorId: 1234,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: "CREATE_PROJECT", project });
			})
			.then((err) => {
				dispatch({ type: "CREATE_PROJECT_ERROR", err });
			});
	};
};
