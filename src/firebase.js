import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCozyzidnPbU6w07k1U9jc69w9Z0onSZvc",
  authDomain: "ecorank-15295.firebaseapp.com",
  projectId: "ecorank-15295",
  storageBucket: "ecorank-15295.appspot.com",
  messagingSenderId: "11032290866138",
  appId: "1:11032290866138:web:e3bb56ec061c58635a26e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
