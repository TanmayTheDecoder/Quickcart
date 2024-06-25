import React from 'react';
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';

const FormGroup = ({
	label,
	onChange,
	type,
	name,
	value,
	isInvalid,
	placeholder,
	isRequired,
	...props
}) => {
	return (
		<FormControl isInvalid={isInvalid}>
			<FormLabel>{label}</FormLabel>
			<Input
				onChange={(e) => onChange(e)}
				type={type}
				name={name}
				value={value}
				placeContent={placeholder}
				isRequired={isRequired}
				{...props}
			/>
			{isInvalid && <FormErrorMessage>{isInvalid}</FormErrorMessage>}
		</FormControl>
	);
};

export default FormGroup;
