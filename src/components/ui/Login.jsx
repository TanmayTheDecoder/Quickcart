import React from 'react';
import logo from '../../assets/Icons/logo.svg';
import FormGroup from '../common/FormGroup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
	const formValidationSchema = yup.object.shape({
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
				<form className='space-y-6'>
					<FormGroup
						label='Email'
						name='email'
						register={register}
						error={errors.email?.message}
						isInvalid={!!errors.email}
						type='text'
						placeholder='Email address'
					/>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
							<div className='text-sm'>
								<a
									href='#'
									className='font-semibold text-indigo-600 hover:text-indigo-500'
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Sign in
						</button>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-500'>
					Not a member?{' '}
					<a
						href='#'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						Start a 14 day free trial
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
