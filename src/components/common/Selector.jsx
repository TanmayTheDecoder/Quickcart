import React from 'react';
import { FormControl, Select, FormErrorMessage } from '@chakra-ui/react';

const Selector = ({
	options,
	onChange,
	placeholder,
	className,
	ringColor,
	name,
	isInvalid,
	error,
	...rest
}) => {
	return (
		<>
			<FormControl isInvalid={isInvalid}>
				<Select
					className={className}
					focusBorderColor={ringColor}
					name={name}
					onChange={(e) => {
						onChange(e);
					}}
					{...rest}
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
				{isInvalid && <FormErrorMessage>{error}</FormErrorMessage>}
			</FormControl>
		</>
	);
};

export default Selector;
