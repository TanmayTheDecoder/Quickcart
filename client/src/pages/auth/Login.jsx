import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormGroup from '../../components/common/FormGroup';
import { FilledButton } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const Login = () => {
	const defaultData = {
		email: '',
		password: '',
	};
	const [fieldData, setFieldData] = useState(defaultData);
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();

	const handleFieldChange = (e) => {
		setFieldData({ ...fieldData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API}/api/v1/auth/login`,
				fieldData
			);
			if (res && res.data?.success === true) {
				navigate('/');
				toast.success(res.data.message);
				setAuth({
					...auth,
					user: res.data.user,
					token: res.data?.token,
				});
				localStorage.setItem('auth', JSON.stringify(res.data));
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
				<h1>User Login</h1>
				<div className='form'>
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
					<FilledButton
						text={'Login'}
						onClick={() => {
							handleSubmit();
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
