// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5IE2iVtofJUXzdTL22x0umy49MS_kdiY",
    authDomain: "b610-learning-platform-bfe6b.firebaseapp.com",
    projectId: "b610-learning-platform-bfe6b",
    storageBucket: "b610-learning-platform-bfe6b.appspot.com",
    messagingSenderId: "39574444362",
    appId: "1:39574444362:web:3e631a46d0ee23af6349b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;