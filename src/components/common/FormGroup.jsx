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
	register,
	value,
	isInvalid,
	error,
	placeholder,
	isRequired,
	ringColor,
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
				{...register(name)}
				{...props}
				focusBorderColor={error || isInvalid ? '#EA6E6E' : ringColor}
			/>
			{isInvalid && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export default FormGroup;
