import { useState } from 'react';
import FilledButton from '../common/Button';
import { Link } from 'react-router-dom';
import Select from '../common/Selector';

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
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
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
	},
	// More products...
];

const options = [
	{
		label: 1,
		value: 1,
	},
	{
		label: 2,
		value: 2,
	},
];

const Cart = () => {
	return (
		<>
			<div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-2xl my-5 font-semibold'>Your bag</h2>
				<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
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
											<div className='flex items-center gap-2'>
												<p className='text-gray-500'>Qty</p>
												<Select
													className='pt-0 cursor-pointer'
													key={product.id}
													options={options}
													ringColor='#009B7D'
												/>
											</div>

											<div className='flex'>
												<FilledButton
													text='Remove'
													bgColor='transparent'
													textColor='tomato'
												/>
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
						<Link className='flex justify-center'>
							<FilledButton
								text='Checkout'
								className='w-max'
								bgColor='#009B7D'
								textColor='#fff'
								_hoverColor='#277e6d'
							/>
						</Link>
					</div>
					<div className='mt-2.5 flex flex-col gap-2.5 justify-center text-center text-sm text-gray-500'>
						<p>or </p>
						<div className='flex justify-center'>
							<Link to='/dashboard'>
								<FilledButton
									text='Continue shopping'
									className='w-max'
									bgColor='#009B7D'
									textColor='#fff'
									_hoverColor='#277e6d'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
