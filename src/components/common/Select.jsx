import React from 'react';
import { Select } from '@chakra-ui/react';

const Select = ({ options, placeholder, ...rest }) => {
	return (
		<>
			<Select
				{...rest}
				placeholder={placeholder}
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

export default Select;
