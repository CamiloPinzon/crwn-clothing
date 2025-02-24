import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	User,
	signOut,
	onAuthStateChanged,
	NextOrObserver,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAcN_fuM5jgt3NIVAHTgruya1c2A1_Ci0I",
	authDomain: "crwn-clothing-db-72a2e.firebaseapp.com",
	projectId: "crwn-clothing-db-72a2e",
	storageBucket: "crwn-clothing-db-72a2e.firebasestorage.app",
	messagingSenderId: "450053711020",
	appId: "1:450053711020:web:96aa798a75045e00beeb09",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation?: object
) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.error("error creating the user", error);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
	return await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
	onAuthStateChanged(auth, callback);
};
