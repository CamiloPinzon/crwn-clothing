export interface InputProps {
    label: string;
	type: string;
	required: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
    name: string;
}