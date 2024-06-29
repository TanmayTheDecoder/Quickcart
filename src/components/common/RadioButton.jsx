import React from 'react';
import {
	Radio,
	RadioGroup,
	FormErrorMessage,
	FormControl,
	FormLabel,
	Stack,
} from '@chakra-ui/react';

const RadioButton = ({
	isInvalid,
	formLabel,
	options,
	name,
	className,
	direction,
	register,
}) => {
	return (
		<>
			<FormControl isInvalid={isInvalid}>
				{formLabel ? <FormLabel>{formLabel}</FormLabel> : null}
				<RadioGroup
					name={name}
					className={`${className}`}
					{...register(name)}
				>
					<Stack direction={direction ? direction : 'column'}>
						{Array.isArray(options) &&
							options.map((option, index) => (
								<Radio
									key={index}
									value={option.value}
									_checked={{
										bg: '#009B7D',
										color: 'white',
										borderColor: '#009B7D',
									}}
									_focus={{
										boxShadow: 'outline',
									}}
								>
									<FormLabel>{option.label}</FormLabel>
								</Radio>
							))}
					</Stack>
				</RadioGroup>
			</FormControl>
		</>
	);
};

export default RadioButton;
