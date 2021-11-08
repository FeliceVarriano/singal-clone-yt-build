import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAqD30xgu5q08Dzyw_a0khGYkM05784LE",
  authDomain: "signal-clone-yt-e026c.firebaseapp.com",
  projectId: "signal-clone-yt-e026c",
  storageBucket: "signal-clone-yt-e026c.appspot.com",
  messagingSenderId: "850915174214",
  appId: "1:850915174214:web:cfd6c372520035bed32747",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export { auth, database };

// let app;

// if (firebase.apps.length == 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };
