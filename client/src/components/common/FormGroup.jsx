import React from 'react';
import '../../assets/styles/formgroup.css';
const FormGroup = ({ label, type, placeholder, value, name, onChange }) => {
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
				/>
			</div>
		</>
	);
};

export default FormGroup;
