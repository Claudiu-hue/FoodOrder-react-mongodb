import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: "pizza-1b9c7.firebaseapp.com",
  projectId: "pizza-1b9c7",
  storageBucket: "pizza-1b9c7.appspot.com",
  messagingSenderId: "902398249235",
  appId: "1:902398249235:web:40bdfea2f38a471a5132e6",
  measurementId: "G-S64JRNYRX4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
