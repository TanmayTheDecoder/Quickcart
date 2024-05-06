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
				sx={{
					fontSize: '0.75rem',
					m: 0,
					p: 0,
					height: 32,
					'.MuiSelect-select': {
						minHeight: '32px',
						p: 0,
					},
					'.MuiOutlinedInput-input': {
						p: '8px 14px',
					},
					'.MuiSelect-icon': {
						top: 'calc(50% - 12px)',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#01997c',
					},
				}}
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
