import React from 'react';
import { Button } from '@chakra-ui/react';
const FilledButton = ({ type, onClick, bgColor, textColor }) => {
	return (
		<Button
			type={type}
			onClick={() => {
				onClick();
			}}
			colorScheme={bgColor}
			textColor={textColor}
		/>
	);
};

export default FilledButton;
