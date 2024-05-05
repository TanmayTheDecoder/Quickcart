import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import { ContainedButton } from '../common/Button';
import Input from '../common/Input';

const SignIn = () => {
	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm '>
				<div className='flex justify-center'>
					<Image
						src={Logo}
						alt='Logo'
						width={150}
					/>
				</div>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Sign Into Your Account
				</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form
					className='space-y-6'
					method='POST'
				>
					<Input
						name='email'
						type='email'
						label='Email Address'
						required
						className='w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-0 focus:ring-offset-0'
						placeholder='Enter Email Address'
					/>

					<Input
						name='password'
						type='password'
						label='Email Password'
						required
						className='w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-0 focus:ring-offset-0'
						placeholder='Enter Password'
					/>

					<div className='flex items-center justify-end'>
						<div className='text-sm'>
							<a className='font-semibold text-[#01997c] hover:text-[#78c0b3]'>
								Forgot password?
							</a>
						</div>
					</div>

					<ContainedButton className='flex w-full justify-center rounded-md !bg-[#01997c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:!bg-[#44a393] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#01997c]'>
						Sign in
					</ContainedButton>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					Not a member?{' '}
					<a
						href='#'
						className='font-semibold leading-6 text-[#01997c] hover:text-[#78c0b3]'
					>
						Start a 14 day free trial
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
