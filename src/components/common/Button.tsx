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
