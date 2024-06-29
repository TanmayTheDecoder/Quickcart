import React from 'react';
import { Controller } from 'react-hook-form';
import {
	Select,
	FormLabel,
	FormControl,
	FormErrorMessage,
} from '@chakra-ui/react';

const Selector = ({
	isInvalid,
	label,
	control,
	rules,
	name,
	ringColor,
	className,
	placeholder,
	options,
	errors,
	...rest
}) => {
	return (
		<>
			<FormControl isInvalid={isInvalid}>
				<FormLabel>{label}</FormLabel>
				<Controller
					control={control}
					rules={rules}
					name={name}
					render={({ field }) => (
						<>
							<Select
								{...field}
								className={`pt-0 ${className}`}
								focusBorderColor={ringColor}
								placeholder={placeholder}
								name={name}
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
							{isInvalid && <FormErrorMessage>{errors}</FormErrorMessage>}
						</>
					)}
				/>
			</FormControl>
		</>
	);
};

export default Selector;
