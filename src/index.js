import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";

import {
	reduxFirestore,
	getFirestore,
	createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase, fbConfig)
	)
);

const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
};

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
	presence: "presence",
	sessions: "sessions",
};

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return null;
	return children;
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{" "}
			<ReactReduxFirebaseProvider {...rrfProps}>
				{" "}
				<AuthIsLoaded>
					<App />{" "}
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
