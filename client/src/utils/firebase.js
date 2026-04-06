
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-iq-3e75d.firebaseapp.com",
  projectId: "interview-iq-3e75d",
  storageBucket: "interview-iq-3e75d.firebasestorage.app",
  messagingSenderId: "862159592601",
  appId: "1:862159592601:web:7308d702cd708076ddec08"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}