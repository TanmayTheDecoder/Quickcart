import React from 'react';
import { Button } from '@chakra-ui/react';
const FilledButton = ({
	type,
	onClick,
	text,
	bgColor,
	textColor,
	className,
	_hoverColor,
}) => {
	return (
		<Button
			type={type}
			onClick={() => {
				onClick && onClick();
			}}
			bgColor={bgColor}
			textColor={textColor}
			className={className}
			_hover={{ bg: _hoverColor }}
		>
			{text}
		</Button>
	);
};

export default FilledButton;
