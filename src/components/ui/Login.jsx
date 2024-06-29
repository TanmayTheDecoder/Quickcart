import React from 'react';
import logo from '../../assets/Icons/logo.svg';
import FormGroup from '../common/FormGroup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilledButton from '../common/Button';
import { Toast, showToast } from '../common/Toast';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const formValidationSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid'),
		password: yup
			.string()
			.required('Password is required')
			.min(6, 'Password should contain 6 characters'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formValidationSchema), mode: 'all' });

	const onSubmit = (data) => {
		if (Object.keys(data).length > 0) {
			navigate('/dashboard');
			showToast('Login successful', 'success');
		} else {
			showToast('Login failed', 'error');
		}
	};

	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<div className='w-full flex justify-center'>
					<img
						src={logo}
						alt='Logo'
						className='xxs:w-[110px] md:w-[120px] lg:w-[140px] xl:w-[230px]'
						loading='lazy'
					/>
				</div>
				<h2 className='mt-6 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900'>
					Sign in to your account
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form
					className='space-y-6'
					onSubmit={handleSubmit(onSubmit)}
					method='POST'
				>
					<FormGroup
						label='Email*'
						name='email'
						register={register}
						error={errors.email?.message}
						isInvalid={!!errors.email}
						type='text'
						placeholder='Email address'
						ringColor='#009B7D'
					/>

					<FormGroup
						label='Password*'
						name='password'
						placeholder='Password'
						register={register}
						error={errors.password?.message}
						isInvalid={!!errors.password}
						type='password'
						ringColor='#009B7D'
					/>

					<FilledButton
						type='submit'
						text='Login'
						className='w-full'
						bgColor='#009B7D'
						textColor='#fff'
						_hoverColor='#277e6d'
					/>
				</form>

				<p className='mt-10 text-center text-sm text-gray-500'>
					Not a member?{' '}
					<Link
						to='/signup'
						className='font-semibold leading-6 text-[#009B7D] hover:text-[#277e6d]'
					>
						Create account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
