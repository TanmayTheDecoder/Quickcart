'use client';
import React from 'react';
import {
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from '@mui/material';
import { ButtonProps, RadioProps } from '../types';

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

export const RadioButton: React.FC<RadioProps> = ({
	label,
	name,
	options,
	defaultValue,
	row,
}) => {
	return (
		<FormControl>
			<FormLabel
				id={`${name}-label`}
				sx={{
					'&.Mui-focused': {
						color: '#01997c',
					},
				}}
			>
				{label}
			</FormLabel>
			<RadioGroup
				row={row}
				aria-labelledby={`${name}-label`}
				name={name}
				defaultValue={defaultValue}
			>
				{options?.map((option) => (
					<FormControlLabel
						key={option.value}
						value={option.value}
						control={
							<Radio
								sx={{
									'&.Mui-checked': {
										color: '#01997c',
									},
								}}
							/>
						}
						label={option.label}
						disabled={option.disabled}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
