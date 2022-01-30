import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// firebase api account config
const config = {
  apiKey: 'AIzaSyC0m7pE20eZQ3bLK4r-TaknRbZT1uwi6jM',
  authDomain: 'crwn-db-517b3.firebaseapp.com',
  projectId: 'crwn-db-517b3',
  storageBucket: 'crwn-db-517b3.appspot.com',
  messagingSenderId: '37857141967',
  appId: '1:37857141967:web:895c8325e6bfe45f8043ba',
  measurementId: 'G-ZD8YNY75RR',
};

/**
 * createUserProfileDocument
 * @param {*} userAuth
 * @param {*} additionalData
 * @returns userRef
 *
 * Function for create profile document within "users" collection,
 * contain displayName, email & createAt
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no userAuth which is firebase config settled then do nothing
  if (!userAuth) return;

  // declare user referenced contains firestore to make users collection based on uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // declare collection referenced contains firestore collection of users
  const collectionRef = firestore.collection('users');

  // catch snapshot of user referenced
  const snapShot = await userRef.get();

  // declare snapshot for collection
  const collectionSnapshot = await collectionRef.get();

  // show data of collection snapshot
  // const collectionSnapshotDoc = collectionSnapshot.docs;
  // console.log(collectionSnapshotDoc.map(doc => doc.data()));

  // if no snapshot user data in users
  if (!snapShot.exists) {
    // declare data from display name & email from userAuth
    const { displayName, email } = userAuth;

    // generate user data created at
    const createdAt = new Date();
    try {
      // set user referenced with contained data
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  // if snapshot exist then return to existed user referenced
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// initialize config of Firebase
firebase.initializeApp(config);

// export auth from firebase auth which is referenced to firebase app has settled config
export const auth = firebase.auth();

// export firestore from firestore
export const firestore = firebase.firestore();

// set provider from Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

// set provider to show select account popup
provider.setCustomParameters({ prompt: 'select_account' });

// function for sign in with google account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
