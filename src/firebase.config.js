// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUrYoVolAfDU8_jSyT9qrew49xreM22Pg",
  authDomain: "assignment-ten-2e1ab.firebaseapp.com",
  projectId: "assignment-ten-2e1ab",
  storageBucket: "assignment-ten-2e1ab.appspot.com",
  messagingSenderId: "214019148326",
  appId: "1:214019148326:web:9abb414a8bce4617de34e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;