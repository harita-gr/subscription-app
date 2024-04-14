import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6c9fdNDdxwt4yjnM21AhZA13Tsg5_kSU",
  authDomain: "stripe-subscription-app-7935b.firebaseapp.com",
  projectId: "stripe-subscription-app-7935b",
  storageBucket: "stripe-subscription-app-7935b.appspot.com",
  messagingSenderId: "850197525087",
  appId: "1:850197525087:web:7ff3232dad08bee51e21ea",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
