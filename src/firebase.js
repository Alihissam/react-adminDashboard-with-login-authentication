import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk3_QRI7lEN-6SAZrbRxNqCT9q6zmFnFU",
  authDomain: "auth-aca77.firebaseapp.com",
  projectId: "auth-aca77",
  storageBucket: "auth-aca77.appspot.com",
  messagingSenderId: "599857733566",
  appId: "1:599857733566:web:cd13ed433e58eade6b23ef",
  measurementId: "G-BEJN2832QH"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth();