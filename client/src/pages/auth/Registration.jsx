import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormGroup from '../../components/common/FormGroup';
import { FilledButton } from '../../components/common/Button';
import '../../assets/styles/registration.css';
import { toast } from 'react-toastify';

const Registration = () => {
	const defaultData = {
		username: '',
		phone: '',
		email: '',
		password: '',
		address: '',
	};
	const [fieldData, setFieldData] = useState(defaultData);

	const handleFieldChange = (e) => {
		setFieldData({ ...fieldData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		toast.success('Registration Successful');
		console.log('Data is :', fieldData);
	};

	return (
		<Layout>
			<div className='form-container'>
				<h1>User Registration</h1>
				<div className='form'>
					<div className='row'>
						<FormGroup
							label={'Name'}
							placeholder={'enter username*'}
							name={'username'}
							onChange={(e) => {
								handleFieldChange(e);
							}}
							type={'text'}
							value={fieldData.username}
						/>
						<FormGroup
							label={'Phone'}
							placeholder={'enter phone number*'}
							name={'phone'}
							onChange={(e) => {
								handleFieldChange(e);
							}}
							value={fieldData.phone}
							type={'text'}
						/>
					</div>
					<div className='row'>
						<FormGroup
							label={'Email'}
							placeholder={'enter email*'}
							name={'email'}
							onChange={(e) => {
								handleFieldChange(e);
							}}
							value={fieldData.email}
							type={'text'}
						/>
						<FormGroup
							label={'Password'}
							placeholder={'enter password*'}
							name={'password'}
							onChange={(e) => {
								handleFieldChange(e);
							}}
							value={fieldData.password}
							type={'text'}
						/>
					</div>
					<FormGroup
						label={'Address'}
						placeholder={'enter address*'}
						name={'address'}
						onChange={(e) => {
							handleFieldChange(e);
						}}
						value={fieldData.address}
						type={'text'}
					/>
					<FilledButton
						text={'Register'}
						onClick={() => {
							handleSubmit();
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Registration;
