export interface ButtonProps {
	children: React.ReactNode;
	buttonType: keyof typeof BUTTON_TYPE_CLASSES;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
}

export const BUTTON_TYPE_CLASSES = {
	default: "default",
	inverted: "inverted",
	google: "google",
};
