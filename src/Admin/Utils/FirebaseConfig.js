// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhUbTvXnSOujH5zvW4Zo8UoXnJDOD7FL4",
  authDomain: "express-api-storage-aec41.firebaseapp.com",
  projectId: "express-api-storage-aec41",
  storageBucket: "express-api-storage-aec41.appspot.com",
  messagingSenderId: "266502292726",
  appId: "1:266502292726:web:0e109b32f8114afd7118d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)