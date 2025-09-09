import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJbSSUNqGFzPw0yZYPclOvFQU3KEOEiQA",
  authDomain: "next-my-app-df4c0.firebaseapp.com",
  projectId: "next-my-app-df4c0",
  storageBucket: "next-my-app-df4c0.firebasestorage.app",
  messagingSenderId: "857685158410",
  appId: "1:857685158410:web:67de2c66e170bd166c8df3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
