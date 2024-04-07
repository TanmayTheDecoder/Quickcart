import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormGroup from '../../components/common/FormGroup';
import { FilledButton } from '../../components/common/Button';
import '../../assets/styles/registration.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const defaultData = {
		username: '',
		phone: '',
		email: '',
		password: '',
		address: '',
	};
	const [fieldData, setFieldData] = useState(defaultData);
	const navigate = useNavigate();
	const handleFieldChange = (e) => {
		setFieldData({ ...fieldData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async () => {
		try {
			const data = await axios.post(
				`${process.env.REACT_APP_API}/api/v1/auth/register`,
				fieldData
			);
			if (data?.success) {
				navigate('/login');
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			console.log('Received error', error);
			toast.error('Something went wrong!');
		}
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
							type={'password'}
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
