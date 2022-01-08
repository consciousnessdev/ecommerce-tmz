import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyC0m7pE20eZQ3bLK4r-TaknRbZT1uwi6jM',
  authDomain: 'crwn-db-517b3.firebaseapp.com',
  projectId: 'crwn-db-517b3',
  storageBucket: 'crwn-db-517b3.appspot.com',
  messagingSenderId: '37857141967',
  appId: '1:37857141967:web:895c8325e6bfe45f8043ba',
  measurementId: 'G-ZD8YNY75RR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;