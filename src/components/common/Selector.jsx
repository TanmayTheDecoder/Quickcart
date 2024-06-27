import React from 'react';
import { Select } from '@chakra-ui/react';

const Selector = ({ options, placeholder, className, ringColor, ...rest }) => {
	return (
		<>
			<Select
				{...rest}
				className={className}
				focusBorderColor={ringColor}
			>
				{Array.isArray(options) &&
					options.map((option) => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					))}
			</Select>
		</>
	);
};

export default Selector;
