import React from 'react';
import Selector from '../common/Selector';
import FilledButton from '../common/Button';
import { Link } from 'react-router-dom';
import FormGroup from '../common/FormGroup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	countryOptions,
	products,
	quantity,
	paymentOptions,
	addressData,
} from '../../utils';
import RadioButton from '../common/RadioButton';

const Checkout = () => {
	const formValidationSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid'),
		streetAddress: yup.string().required('Street address is required'),
		country: yup.string().required('Country is required'),
		city: yup.string().required('City is required'),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		clearErrors,
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
									<h2 className='text-base text-xl font-semibold leading-7 text-gray-900'>
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
												label='Email'
												name='email'
												register={register}
												error={errors.email?.message}
												isInvalid={!!errors.email}
												type='text'
												placeholder='Email address'
												ringColor='#009B7D'
											/>
										</div>
										<div className='sm:col-span-3'>
											<Selector
												options={countryOptions}
												ringColor='#009B7D'
												name='country'
												errors={errors.country?.message}
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
											<FormGroup
												register={register}
												label='City*'
												type='text'
												name='city'
												ringColor='#009B7D'
												error={errors.city?.message}
												isInvalid={!!errors.city}
												placeholder='Your city'
											/>
										</div>
										<div className='sm:col-span-2'>
											<FormGroup
												register={register}
												label='State / Province'
												type='text'
												name='state'
												ringColor='#009B7D'
												placeholder='Your state'
											/>
										</div>
										<div className='sm:col-span-2'>
											<FormGroup
												register={register}
												label='ZIP'
												type='text'
												name='state'
												ringColor='#009B7D'
												placeholder='zip code'
											/>
										</div>
									</div>
								</div>

								<div className='mt-2.5 flex items-center justify-end gap-x-6'>
									<FilledButton
										onClick={() => clearErrors()}
										type='reset'
										text='Cancel'
										className='w-max'
										bgColor='tomato'
										textColor='#fff'
										_hoverColor='#F7755E'
									/>
									<FilledButton
										type='submit'
										text='Add'
										className='w-max'
										bgColor='#009B7D'
										textColor='#fff'
										_hoverColor='#277e6d'
									/>
								</div>

								<div className='border-b border-gray-900/10 pb-5'>
									<h2 className='text-base font-semibold leading-7 text-gray-900'>
										Address
									</h2>
									<p className='mt-1 text-sm leading-6 text-gray-600'>
										Choose from existing
									</p>

									<ul
										role='list'
										className='divide-y divide-gray-100'
									>
										{addressData.map((address, index) => (
											<li
												key={index}
												className='flex justify-between gap-x-6 py-5'
											>
												<div className='flex min-w-0 gap-x-4'>
													<div className='min-w-0 flex-auto'>
														<p className='text-sm font-semibold leading-6 text-gray-900'>
															{address.name}
														</p>
														<p className='mt-1 truncate text-xs leading-5 text-gray-500'>
															{address.street}
														</p>
													</div>
												</div>
												<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
													<p className='text-sm leading-6 text-gray-900'>
														{address.state}
													</p>
													<p className='text-sm leading-6 text-gray-900'>
														{address.pinCode}
													</p>
												</div>
											</li>
										))}
									</ul>

									<div className='mt-5 space-y-10'>
										<fieldset>
											<legend className='text-sm font-semibold leading-6 text-gray-900'>
												Payment modes
											</legend>
											<p className='mt-1 text-sm leading-6 text-gray-600'>
												Choose from:
											</p>
											<div className='mt-6 space-y-2.5'>
												<RadioButton
													options={paymentOptions}
													name='paymentOptions'
													register={register}
												/>
											</div>
										</fieldset>
									</div>
								</div>
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
															<Selector
																options={quantity}
																ringColor='#009B7D'
																name='quantity'
																control={control}
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

								<div className='flex justify-center items-center py-5'>
									<Link to='/payment'>
										<FilledButton
											text='Continue to payment'
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
