'use client';
import React, { useState } from 'react';

const Checkout: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		company: '',
		address: '',
		apartment: '',
		city: '',
		country: 'United States',
		state: '',
		postalCode: '',
		phone: '',
		paymentMethod: 'credit',
		cardNumber: '',
		nameOnCard: '',
		expiryDate: '',
		cvc: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form data submitted:', formData);
	};

	return (
		<div className='container mx-auto px-4'>
			<form
				className='max-w-lg mx-auto bg-white p-5 shadow-md rounded-md'
				onSubmit={handleSubmit}
			>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Email address
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='w-full p-2 border rounded'
					/>
				</div>

				{/* Similar blocks for other fields */}

				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label
							htmlFor='firstName'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							First name
						</label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={formData.firstName}
							onChange={handleChange}
							className='w-full p-2 border rounded'
						/>
					</div>
					<div>
						<label
							htmlFor='lastName'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Last name
						</label>
						<input
							type='text'
							id='lastName'
							name='lastName'
							value={formData.lastName}
							onChange={handleChange}
							className='w-full p-2 border rounded'
						/>
					</div>
				</div>

				{/* Continue with similar structured input fields for the rest of the form */}

				<div className='mb-4'>
					<label
						htmlFor='paymentMethod'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Payment method
					</label>
					<div className='flex items-center'>
						<input
							type='radio'
							id='standard'
							name='paymentMethod'
							value='credit'
							checked={formData.paymentMethod === 'credit'}
							onChange={handleChange}
							className='mr-2'
						/>
						<label
							htmlFor='standard'
							className='mr-4'
						>
							Credit Card
						</label>
						<input
							type='radio'
							id='express'
							name='paymentMethod'
							value='cash'
							checked={formData.paymentMethod === 'cash'}
							onChange={handleChange}
							className='mr-2'
						/>
						<label htmlFor='express'>Cash On Delivery</label>
					</div>
				</div>

				{/* Similar for payment method and credit card details */}

				<button
					type='submit'
					className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Checkout;
