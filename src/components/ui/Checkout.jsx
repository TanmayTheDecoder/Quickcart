import React from 'react';
import Selector from '../common/Selector';
import FilledButton from '../common/Button';
import { Link } from 'react-router-dom';
import FormGroup from '../common/FormGroup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const Checkout = () => {
	const formValidationSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid'),
		streetAddress: yup.string().required('Street address is required'),
		country: yup
			.string()
			.required('Country is required')
			.oneOf(options.map((option) => option.value)),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
	} = useForm({
		mode: 'all',
		resolver: yupResolver(formValidationSchema),
	});

	const onSubmit = (data) => {
		console.log('console_data', data);
	};

	return (
		<>
			<div className='container mx-auto max-w-5xl my-5 px-4 sm:px-6 lg:px-8 xl:px-0'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12'>
					<div className='lg:col-span-6'>
						<form
							method='POST'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='space-y-5'>
								<div className='border-b border-gray-900/10 pb-5'>
									<h2 className='text-base font-semibold leading-7 text-gray-900'>
										Personal Information
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-600'>
										Use a permanent address where you can receive mail.
									</p>

									<div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-6'>
										<div className='sm:col-span-3'>
											<FormGroup
												register={register}
												label='First name'
												type='text'
												name='firstName'
												ringColor='#009B7D'
												placeholder='First name'
											/>
										</div>

										<div className='sm:col-span-3'>
											<FormGroup
												register={register}
												label='Last name'
												type='text'
												name='lastName'
												ringColor='#009B7D'
												placeholder='Last name'
											/>
										</div>

										<div className='sm:col-span-4'>
											<FormGroup
												register={register}
												label='Email *'
												type='email'
												name='email'
												ringColor='#009B7D'
												error={errors.email?.message}
												isInvalid={!!errors.email}
												placeholder='Email address'
											/>
										</div>

										<div className='sm:col-span-3'>
											<Selector
											// options={options}
											// ringColor='#009B7D'
											name='country'
											// errors={errors.country?.message}
											isInvalid={!!errors.country}
											label='Select country*'
											control={control}
										/>
										</div>

										<div className='col-span-full'>
											<FormGroup
												register={register}
												label='Street address *'
												type='text'
												name='streetAddress'
												ringColor='#009B7D'
												error={errors.streetAddress?.message}
												isInvalid={!!errors.streetAddress}
												placeholder='Street address'
											/>
										</div>

										<div className='sm:col-span-2 sm:col-start-1'>
											<label
												htmlFor='city'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												City
											</label>
											<div className='mt-2'>
												<input
													type='text'
													name='city'
													id='city'
													autoComplete='address-level2'
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='sm:col-span-2'>
											<label
												htmlFor='region'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												State / Province
											</label>
											<div className='mt-2'>
												<input
													type='text'
													name='region'
													id='region'
													autoComplete='address-level1'
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='sm:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												ZIP / Postal code
											</label>
											<div className='mt-2'>
												<input
													type='text'
													name='postal-code'
													id='postal-code'
													autoComplete='postal-code'
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='border-b border-gray-900/10 pb-5'>
									<h2 className='text-base font-semibold leading-7 text-gray-900'>
										Address
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-600'>
										Choose from existing
									</p>

									<div className='mt-5 space-y-10'>
										<fieldset>
											<legend className='text-sm font-semibold leading-6 text-gray-900'>
												Payment modes
											</legend>
											<p className='mt-1 text-sm leading-6 text-gray-600'>
												Choose from:
											</p>
											<div className='mt-6 space-y-2.5'>
												<div className='flex items-center gap-x-3'>
													<input
														id='push-everything'
														name='push-notifications'
														type='radio'
														className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
													/>
													<label
														htmlFor='push-everything'
														className='block text-sm font-medium leading-6 text-gray-900'
													>
														Cash
													</label>
												</div>
												<div className='flex items-center gap-x-3'>
													<input
														id='push-email'
														name='push-notifications'
														type='radio'
														className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
													/>
													<label
														htmlFor='push-email'
														className='block text-sm font-medium leading-6 text-gray-900'
													>
														Card
													</label>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
							</div>

							<div className='mt-2.5 flex items-center justify-end gap-x-6'>
								<FilledButton
									text='Cancel'
									className='w-max'
									bgColor='tomato'
									textColor='#fff'
									_hoverColor='#F7755E'
								/>
								<FilledButton
									type='submit'
									text='Save'
									className='w-max'
									bgColor='#009B7D'
									textColor='#fff'
									_hoverColor='#277e6d'
								/>
							</div>
						</form>
					</div>
					<div className='lg:col-span-6'>
						<div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
							<h2 className='text-2xl mb-5 font-semibold'>
								Items in your cart
							</h2>
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
															{/* <Selector
															key={product.id}
															options={options}
															ringColor='#009B7D'
														/> */}
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

								<div className='flex justify-center gap-5 items-center py-5'>
									<Link className='flex justify-center'>
										<FilledButton
											text='Checkout'
											className='w-max'
											bgColor='#009B7D'
											textColor='#fff'
											_hoverColor='#277e6d'
										/>
									</Link>
									<p>or </p>

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
				</div>
			</div>
		</>
	);
};

export default Checkout;
