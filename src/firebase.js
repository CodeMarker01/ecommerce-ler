// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";
// firebase config
const config = {
  apiKey: "AIzaSyCBk8oAtpe18n5dPbd5u4OTQZJ99us84tk",
  authDomain: "ecommerce-mern-ler.firebaseapp.com",
  projectId: "ecommerce-mern-ler",
  storageBucket: "ecommerce-mern-ler.appspot.com",
  messagingSenderId: "908823259684",
  appId: "1:908823259684:web:82912c47e90ccfff2e06b1",
  measurementId: "G-SPKFEP64QB",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
