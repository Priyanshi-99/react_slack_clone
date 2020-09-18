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
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUseProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        display_name: displayName || additionalData.displayName,
        email,
        photo_url: photoURL
          ? photoURL
          : "https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72",
        created_at: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error", error.message);
    }
  }
  return getUserDocumnet(user.uid);
};
async function getUserDocumnet(uid) {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection("user").doc(uid);
    return userDocument;
  } catch (error) {
    console.error("Error in getUserDocument", error.message);
  }
}
