// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNZF1pRsRUM3ZwzBKHrwXx51PDp-qiPFM",
    authDomain: "tienda-apple-reactjs.firebaseapp.com",
    projectId: "tienda-apple-reactjs",
    storageBucket: "tienda-apple-reactjs.appspot.com",
    messagingSenderId: "605225737015",
    appId: "1:605225737015:web:c30b6485ae0bc4fa9058b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 