import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDhwk6ASPnTlIidTJr1-TeTNsYWfkE2zoY",
  authDomain: "school-managment-system-8b152.firebaseapp.com",
  projectId: "school-managment-system-8b152",
  storageBucket: "school-managment-system-8b152.firebasestorage.app",
  messagingSenderId: "980356818661",
  appId: "1:980356818661:web:ccf951f7e2233fa232160c",
  measurementId: "G-2CQGD0RV8K",
  databaseURL: "https://school-managment-system-8b152-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
export {app};