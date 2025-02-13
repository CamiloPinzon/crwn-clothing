import { InputProps } from "./form-input.type";

import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }: InputProps) => {
	return (
		<div className="group">
			{label && (
				<label
					className={`${otherProps.value.length && "shrink"} form-input-label`}
				>
					{label}
				</label>
			)}
			<input className="form-input" {...otherProps} />
		</div>
	);
};

export default FormInput;
