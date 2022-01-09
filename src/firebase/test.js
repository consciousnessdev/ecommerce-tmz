import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

// Select data by chaining collection & doc
firestore.collection('users').doc('w4BDDvHlB7dXSzYaKRzJ').collection('cartItem').doc('02QETXbzJOO8zExz3Cja');

// select data by string path, ex: select of specific document
firestore.doc('/users/w4BDDvHlB7dXSzYaKRzJ/cartItem/02QETXbzJOO8zExz3Cja');

// select of specific collection
firestore.collection('/users/w4BDDvHlB7dXSzYaKRzJ/cartItem');
