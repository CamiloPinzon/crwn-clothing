// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxLP-3cnaBVqy2bSX155myPlWf3Tl-T8",
  authDomain: "crwn-clothing-db-1b1e2.firebaseapp.com",
  projectId: "crwn-clothing-db-1b1e2",
  storageBucket: "crwn-clothing-db-1b1e2.appspot.com",
  messagingSenderId: "890101640223",
  appId: "1:890101640223:web:42772979c53a6e68bf392a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGoolgePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {
    displayName: ''
  }) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.error(`Error creating user: ${error.message}`);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
