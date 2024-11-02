import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnKalgABP_T7plLk_SKe4hcCbXg--mR4w",
  authDomain: "mid-hackthone.firebaseapp.com",
  projectId: "mid-hackthone",
  storageBucket: "mid-hackthone.firebasestorage.app",
  messagingSenderId: "939715419075",
  appId: "1:939715419075:web:1ced8184e878686b7a3b76"
};

export const app = initializeApp(firebaseConfig);