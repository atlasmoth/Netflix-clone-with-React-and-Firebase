import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB151roBmFjW46fX3ssESmXtx56Us4HReY",
  authDomain: "netflix-af90c.firebaseapp.com",
  databaseURL: "https://netflix-af90c.firebaseio.com",
  projectId: "netflix-af90c",
  storageBucket: "netflix-af90c.appspot.com",
  messagingSenderId: "627013127407",
  appId: "1:627013127407:web:3fac8c48bacbd5959f9f1a",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
