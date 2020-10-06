import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYZsJSWl3hccobogl3LBnRieIGKY7bOvM",
    authDomain: "todo-app-a4f18.firebaseapp.com",
    databaseURL: "https://todo-app-a4f18.firebaseio.com",
    projectId: "todo-app-a4f18",
    storageBucket: "todo-app-a4f18.appspot.com",
    messagingSenderId: "1099334383832",
    appId: "1:1099334383832:web:a7ea70993d551addd9ffad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;