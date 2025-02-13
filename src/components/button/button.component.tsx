import { ButtonProps, BUTTON_TYPE_CLASSES } from "./button.type";

import "./button.styles.scss";

const Button = ({
	children,
	buttonType = "default",
	type = "button",
}: ButtonProps) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
