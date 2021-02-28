import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrjNPHbl9Gp7TpMHMzfj-hJUNd4ipzMLI",
  authDomain: "lereorg.firebaseapp.com",
  databaseURL: "https://lereorg.firebaseio.com",
  projectId: "lereorg",
  storageBucket: "lereorg.appspot.com",
  messagingSenderId: "917393781941",
  appId: "1:917393781941:web:52be10146ffb7057b0fafc",
  measurementId: "G-RDWK6WF9SS",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const firestore = firebase.firestore();
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export {
  auth,
  getCurrentUser,
  firestore,
  signInWithGoogle,
  signInWithFacebook,
};
export default firebase;
