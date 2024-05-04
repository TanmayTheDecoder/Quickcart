'use client';
import ProductList from '@/components/ProductList';
import Navbar from '@/components/includes/Navbar';
import React from 'react';

const page = () => {
	return (
		<Navbar heading='Products'>
			<ProductList />
		</Navbar>
	);
};

export default page;
