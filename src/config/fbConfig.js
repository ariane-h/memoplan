import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDcdtJcRsCveITPsjxBF1E3ahe6SxWTNOQ",
	authDomain: "memoplan.firebaseapp.com",
	databaseURL: "https://memoplan.firebaseio.com",
	projectId: "memoplan",
	storageBucket: "memoplan.appspot.com",
	messagingSenderId: "363527896230",
	appId: "1:363527896230:web:dfdc5bdab92478c3c9c867",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
