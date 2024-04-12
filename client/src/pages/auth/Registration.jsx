import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormGroup from '../../components/common/FormGroup';
import { FilledButton } from '../../components/common/Button';
import '../../assets/styles/auth/form.css';
import { toast } from 'react-hot-toast';
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
			const res = await axios.post(
				`${process.env.REACT_APP_API}/api/v1/auth/register`,
				fieldData
			);
			if (res && res.data?.success === true) {
				navigate('/login');
				toast.success(res.data.message);
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			console.log('Received error', error);
			toast.error(error);
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
							required
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
							required
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
							type={'email'}
							required
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
							required
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
						required
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
