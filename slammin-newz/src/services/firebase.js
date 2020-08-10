import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "slammin-newz.firebaseapp.com",
    databaseURL: "https://slammin-newz.firebaseio.com"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();