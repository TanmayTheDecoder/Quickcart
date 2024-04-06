import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../assets/styles/layout.css';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<div>
					<meta charSet='UTF-8' />
					<meta name='description' content={description} />
					<meta name='keywords' content={keywords} />
					<meta name='author' content={author} />
					<title>{title}</title>
				</div>
			</Helmet>
			<Header />
			<main className='content-area'>
				<ToastContainer />
				{children}
			</main>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	description: 'mern stack project',
	title: 'Quickcart - shopnow',
	keywords: 'mern,react,node,mongodb,express',
	author: 'Tanmay Dobariya',
};

export default Layout;
