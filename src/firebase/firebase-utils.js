import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBfA_G_fy9QodknkL0IdsY--oURIFCkJPk",
  authDomain: "poehr-db.firebaseapp.com",
  projectId: "poehr-db",
  storageBucket: "poehr-db.appspot.com",
  messagingSenderId: "305539355313",
  appId: "1:305539355313:web:ada80012ed8d679eb04890",
  measurementId: "G-LTYBYFRLDL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;