import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDuh0m2JY33eAlZylDtoblm_nuluUsVOtg",
  authDomain: "react-slack-clone-99c0c.firebaseapp.com",
  databaseURL: "https://react-slack-clone-99c0c.firebaseio.com",
  projectId: "react-slack-clone-99c0c",
  storageBucket: "react-slack-clone-99c0c.appspot.com",
  messagingSenderId: "218082619578",
  appId: "1:218082619578:web:e79a8c457402620a2b5283",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
