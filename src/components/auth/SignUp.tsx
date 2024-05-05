import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import { useRouter } from 'next/navigation';
import { ContainedButton } from '../common/Button';

const SignUp = () => {
	const router = useRouter();

	const goToLogin = () => {
		router.push('/auth/sign-in');
	};

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
					Create Your Account
				</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form
					className='space-y-6'
					action='#'
					method='POST'
				>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#01997c] sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#01997c] sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Confirm Password
						</label>
						<div className='mt-2'>
							<input
								id='confirmPassword'
								name='confirmPassword'
								type='confirmPassword'
								autoComplete='confirmPassword'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#01997c] sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<ContainedButton className='flex w-full justify-center rounded-md !bg-[#01997c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:!bg-[#44a393] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#01997c]'>
							Sign Up
						</ContainedButton>
					</div>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					Already a member?{' '}
					<span
						className='cursor-pointer font-semibold leading-6 text-[#01997c] hover:text-[#78c0b3]'
						onClick={() => {
							goToLogin(); // ! Apply Validations in this function
						}}
					>
						Sign In
					</span>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
