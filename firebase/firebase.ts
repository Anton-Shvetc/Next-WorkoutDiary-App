
// import { initializeApp, getApps, getApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBUXvN-Tos4PafkOaT9M-MBxFMwslvUHAA",
  authDomain: "workoutdiary-sa.firebaseapp.com",
  projectId: "workoutdiary-sa",
  storageBucket: "workoutdiary-sa.appspot.com",
  messagingSenderId: "843015520790",
  appId: "1:843015520790:web:12ad3151871a81f3b3eb37",
};

const app = initializeApp(firebaseConfig);
// app()

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

export const auth = getAuth();

// getApps().length === 0 ? initializeApp(clientCredentials) : getApp();

// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }

// export default firebase;

