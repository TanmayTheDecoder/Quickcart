'use client';
import React, { useState } from 'react';
import { ContainedButton } from '../common/Button';
import { useRouter } from 'next/navigation';
import Dropdown from '../common/Dropdown';
import { SelectChangeEvent } from '@mui/material';

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt:
			'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
	},
];

const dropDownData = [
	{
		value: 1,
		label: '1',
	},
	{
		value: 2,
		label: '2',
	},
	{
		value: 3,
		label: '3',
	},
];

const Cart = () => {
	const router = useRouter();

	const backToShopping = () => {
		router.push('/dashboard');
	};

	const [selectedValue, setSelectedValue] = useState<number>(1);

	const handleChange = (e: SelectChangeEvent) => {
		setSelectedValue(e.target.value as any);
	};

	return (
		<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
				<h1 className='text-4xl my-6 font-bold tracking-tight text-gray-900'>
					Cart
				</h1>
				<div className='flow-root'>
					<ul
						role='list'
						className='-my-6 divide-y divide-gray-200'
					>
						{products.map((product) => (
							<li
								key={product.id}
								className='flex py-6'
							>
								<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className='h-full w-full object-cover object-center'
									/>
								</div>

								<div className='ml-4 flex flex-1 flex-col'>
									<div>
										<div className='flex justify-between text-base font-medium text-gray-900'>
											<h3>
												<a href={product.href}>{product.name}</a>
											</h3>
											<p className='ml-4'>{product.price}</p>
										</div>
										<p className='mt-1 text-sm text-gray-500'>
											{product.color}
										</p>
									</div>
									<div className='flex flex-1 items-end justify-between text-sm'>
										<div className='flex gap-2 items-center'>
											<label className='m-0'>Qty.</label>
											<Dropdown
												key={product.id}
												value={selectedValue}
												onChange={handleChange}
												options={dropDownData}
												variant='standard'
											/>
										</div>
										<div className='flex'>
											<ContainedButton className='flex w-full justify-center rounded-md !bg-[#01997c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:!bg-[#44a393] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#01997c]'>
												Remove
											</ContainedButton>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
				<div className='flex justify-between text-base font-medium text-gray-900'>
					<p>Subtotal</p>
					<p>$262.00</p>
				</div>
				<p className='mt-0.5 text-sm text-gray-500'>
					Shipping and taxes calculated at checkout.
				</p>
				<div className='mt-6'>
					<ContainedButton className='flex w-full justify-center rounded-md !bg-[#01997c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:!bg-[#44a393] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#01997c]'>
						Checkout
					</ContainedButton>
				</div>
				<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
					<p>
						or{' '}
						<button
							type='button'
							className='cursor-pointer font-semibold leading-6 text-[#01997c] hover:text-[#78c0b3]'
							onClick={() => backToShopping()}
						>
							Continue Shopping
							<span aria-hidden='true'> &rarr;</span>
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
