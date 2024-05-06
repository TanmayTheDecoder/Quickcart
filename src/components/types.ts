import { SelectChangeEvent } from '@mui/material';

export type NavbarProps = {
	children?: React.ReactNode;
	heading?: string;
};

export type ButtonProps = {
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
};

export type InputProps = {
	value?: string;
	onChange?: (e: any) => void;
	name?: string;
	placeholder?: string;
	label?: string;
	className?: string;
	type?: any;
	required?: boolean;
};

export type DropDownProps = {
	value?: any;
	label?: string;
	onChange?: (e: SelectChangeEvent) => void;
	options?: { value: any; label: string }[];
	variant?: string;
};
