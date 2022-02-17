import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAK5bNSiBmbquLYS590RXP2thEMv-eDjWw",
    authDomain: "crwn-db-8b2fa.firebaseapp.com",
    projectId: "crwn-db-8b2fa",
    storageBucket: "crwn-db-8b2fa.appspot.com",
    messagingSenderId: "165090650579",
    appId: "1:165090650579:web:472a66cf9da67f7e142726"
  };
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
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