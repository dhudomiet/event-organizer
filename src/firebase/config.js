import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {

apiKey: "AIzaSyB9NAdGbBZ2DPxNu3ntMK9ZnCUg3EjC0ho",
authDomain: "event-organizer-802c1.firebaseapp.com",
projectId: "event-organizer-802c1",
storageBucket: "event-organizer-802c1.appspot.com",
messagingSenderId: "1059399735915",
appId: "1:1059399735915:web:a22df4767cb874d83cef2e"

};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
