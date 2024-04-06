import React from 'react';
import Layout from '../components/Layout/Layout';
import '../assets/styles/pagenotfound.css';
import { OutlinedButton } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate('/');
	};
	return (
		<Layout>
			<div className='page-not-found-container'>
				<div className='page-not-found'>
					<p>404</p>
					<h1>Page Not Found</h1>
					<OutlinedButton
						text='go back'
						onClick={() => {
							goToHome();
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default PageNotFound;
