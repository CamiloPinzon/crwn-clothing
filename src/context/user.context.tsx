import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";
import { User as FirebaseUser } from "firebase/auth";

import type { User, UserContextType, UserProviderProps } from "./user.types";

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const value: UserContextType = { currentUser, setCurrentUser };
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(
			(user: FirebaseUser | null) => {
				if (user) {
					console.log(user);
				} else {
					console.log("user signed out");
				}
			}
		);
		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
