import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWoc3trlC_YpfLSQOwfbbNGPu29R4R6pM",
  authDomain: "fir-todo-app-a4646.firebaseapp.com",
  projectId: "fir-todo-app-a4646",
  storageBucket: "fir-todo-app-a4646.appspot.com",
  messagingSenderId: "701910449545",
  appId: "1:701910449545:web:4ba6906e448db35715f558",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
