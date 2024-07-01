import React from 'react';
import Navbar from '../includes/Navbar';

const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
