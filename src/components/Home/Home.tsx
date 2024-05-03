import React from 'react';
import Navbar from '../includes/Navbar';
import ProductList from '../ProductList';

const HomePage = () => {
	return (
		<Navbar heading='Products'>
			<ProductList />
		</Navbar>
	);
};

export default HomePage;
