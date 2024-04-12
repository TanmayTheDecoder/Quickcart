import React from 'react';
import '../../assets/styles/common/formgroup.css';
const FormGroup = ({
	label,
	type,
	placeholder,
	value,
	name,
	onChange,
	required,
}) => {
	return (
		<>
			<div className='formgroup-container'>
				<label>{label}</label>
				<input
					type={type}
					className='formgroup-input'
					placeholder={placeholder}
					value={value}
					name={name}
					onChange={(e) => {
						onChange(e);
					}}
					required={required}
				/>
			</div>
		</>
	);
};

export default FormGroup;
