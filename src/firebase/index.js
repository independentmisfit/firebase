// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNxvo_KtdrSISb9DS9pMv5l6qPrlCJmMc",
  authDomain: "fir-signin-448fc.firebaseapp.com",
  projectId: "fir-signin-448fc",
  storageBucket: "fir-signin-448fc.appspot.com",
  messagingSenderId: "216425918220",
  appId: "1:216425918220:web:9ffe1559b400e8d39ee329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }