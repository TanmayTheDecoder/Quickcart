import React from 'react';
import '../../assets/styles/common/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<h4>2024 &copy; Quickcart All Rights Reserved.</h4>
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
