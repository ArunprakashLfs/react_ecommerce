// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZrAngxLfpIQrLB8QDhCokDQrWwsK5IhM",
  authDomain: "reactapp-26b9f.firebaseapp.com",
  projectId: "reactapp-26b9f",
  storageBucket: "reactapp-26b9f.appspot.com",
  messagingSenderId: "200854246477",
  appId: "1:200854246477:web:81f06863d062cdad653804",
  measurementId: "G-NW26G67MD7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalyt