import React from 'react';
import { TextField } from '@mui/material';
import { InputProps } from '../types';

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	name,
	placeholder,
	label,
	className,
	type,
	required,
}) => {
	return (
		<TextField
			value={value}
			onChange={onChange}
			name={name}
			placeholder={placeholder}
			label={label}
			className={className}
			type={type}
			required={required}
			InputLabelProps={{
				sx: {
					'&.Mui-focused': {
						color: '#01997c',
					},
				},
			}}
			sx={{
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: '#c4c4c4',
					},
					'&:hover fieldset': {
						borderColor: '#a0a0a0',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#01997c',
					},
				},
			}}
		/>
	);
};

export default Input;
