import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBlg--196SvkFjndsJa2J_D79EoSY4cuWA",
  authDomain: "my-elo-react.firebaseapp.com",
  databaseURL: "https://my-elo-react.firebaseio.com",
  projectId: "my-elo-react",
  storageBucket: "my-elo-react.appspot.com",
  messagingSenderId: "627485021375",
  appId: "1:627485021375:web:7de26f85dcdda4b2e6a20a",
  // measurementId: "G-22E20QSE8E"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;