
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzkCtfWVH6P2KQyKY1coLevIdKUYaCipE",
    authDomain: "scores-a152b.firebaseapp.com",
    projectId: "scores-a152b",
    storageBucket: "scores-a152b.appspot.com",
    messagingSenderId: "349478315762",
    appId: "1:349478315762:web:7a597cce4d73061418926b"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();