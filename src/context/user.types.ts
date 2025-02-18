import { ReactNode, Dispatch, SetStateAction } from "react";

export type User = {
	id: string;
	email: string;
	displayName: string;
	createdAt: Date;
} | null;

export type UserContextType = {
	currentUser: User;
	setCurrentUser: Dispatch<SetStateAction<User>>;
};

export type UserProviderProps = {
	children: ReactNode;
};
