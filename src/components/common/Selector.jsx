import React from 'react';
import { Controller } from 'react-hook-form';
import {
	Select,
	FormLabel,
	FormControl,
	FormErrorMessage,
} from '@chakra-ui/react';

const Selector = ({ isInvalid, label, control, rules }) => {
	return (
		<>
			<FormControl isInvalid={isInvalid}>
				<FormLabel>{label}</FormLabel>
				<Controller
					control={control}
					rules={rules}
					render={({ field }) => null} //* Start here
				/>
			</FormControl>
		</>
	);
};

export default Selector;
