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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`"users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!(await snapShot).exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
