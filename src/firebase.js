
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwxHw2MNvaWE0E8HzBzGoTju-FnxmBXLs",
  authDomain: "admin-99128.firebaseapp.com",
  projectId: "admin-99128",
  storageBucket: "admin-99128.appspot.com",
  messagingSenderId: "618554599852",
  appId: "1:618554599852:web:de100a5d47db4e7cc4f209"
};


const app = initializeApp(firebaseConfig);

export const  auth = getAuth()
