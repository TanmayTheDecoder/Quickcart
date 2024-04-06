import React from 'react';
import '../../assets/styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<h6>2024 &copy; Quickcart All Rights Reserved.</h6>
			<ul className='footer-nav-links'>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/policy'>Privacy Policy</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
