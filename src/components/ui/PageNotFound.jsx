import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/animations/PageNotFound.json';
import FilledButton from '../common/Button';
console.log('console_animation', notFoundAnimation);
const PageNotFound = () => {
	return (
		<>
			<div className='container mx-auto flex flex-col justify-center h-screen'>
				<div className='flex justify-center'>
					<div className='w-[30%]'>
						<Lottie
							animationData={notFoundAnimation}
							loop={true}
							autoPlay={true}
							rendererSettings={{
								preserveAspectRatio: 'xMidYMid slice',
							}}
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<Link to='/dashboard'>
						<FilledButton
							type='submit'
							text='Go to home'
							className='w-max'
							bgColor='#009B7D'
							textColor='#fff'
							_hoverColor='#277e6d'
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
