'use client';
import React from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '../types';

export const ContainedButton: React.FC<ButtonProps> = ({
	className,
	children,
	onClick,
}) => {
	return (
		<Button
			className={`${className}`}
			variant='contained'
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

import { useState } from 'react';
import Radio from '@mui/material/Radio';
import { RadioProps } from '../types';

export const RadioButton: React.FC<RadioProps> = ({ options }) => {
	const [selectedValue, setSelectedValue] = useState(options[0].value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div>
			{options.map((option) => (
				<div key={option.value}>
					<Radio
						checked={selectedValue === option.value}
						onChange={handleChange}
						value={option.value}
						name='radio-buttons'
						inputProps={{ 'aria-label': option.ariaLabel }}
					/>
					{option.label}
				</div>
			))}
		</div>
	);
};
