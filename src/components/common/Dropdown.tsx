import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { DropDownProps } from '../types';

const Dropdown: React.FC<DropDownProps> = ({
	value,
	label,
	onChange,
	options,
	variant,
}) => {
	return (
		<FormControl className='flex gap-2.5'>
			<InputLabel>{label}</InputLabel>
			<Select
				variant={variant}
				value={value}
				label={label}
				onChange={onChange}
			>
				{options?.map((option, index) => (
					<MenuItem
						key={index}
						value={option.value}
					>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
