// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj1IPqfGx7Ia0mdA6XuftN5ufJuvERd2I",
    authDomain: "toy-topia-site.firebaseapp.com",
    projectId: "toy-topia-site",
    storageBucket: "toy-topia-site.firebasestorage.app",
    messagingSenderId: "622953336773",
    appId: "1:622953336773:web:cf8c82bb11decc945b05ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);