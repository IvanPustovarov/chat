import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBvzaBcTTNG3cSvkxwRdHwrhPXNNg7aooY",
  authDomain: "react-chat-38068.firebaseapp.com",
  projectId: "react-chat-38068",
  storageBucket: "react-chat-38068.appspot.com",
  messagingSenderId: "979054034025",
  appId: "1:979054034025:web:f7303edc6b6bffda9076f8",
});

const db = firebase.firestore();

export { db };
