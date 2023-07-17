import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxFwWp68mfE5evK5-U6K9xRSzHwUiXkx0",
  authDomain: "arcade-bd.firebaseapp.com",
  projectId: "arcade-bd",
  storageBucket: "arcade-bd.appspot.com",
  messagingSenderId: "539036368449",
  appId: "1:539036368449:web:fc8b0acf0f72410d8850c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);