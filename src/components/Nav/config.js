// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDH65ifTLEF3gS8XSLzeS0O3pVvqz44SuM",
  authDomain: "gdsc-ef90b.firebaseapp.com",
  projectId: "gdsc-ef90b",
  storageBucket: "gdsc-ef90b.appspot.com",
  messagingSenderId: "712125334137",
  appId: "1:712125334137:web:cb910e12a1d15028614aa8",
  measurementId: "G-KYGXPJSL9B",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export  {auth, provider};

