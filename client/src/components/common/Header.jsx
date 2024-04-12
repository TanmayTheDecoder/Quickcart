import React from 'react';
import logo from '../../assets/icons/logo.png';
import '../../assets/styles/common/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header-container'>
			<div className='header-inner-container'>
				<div className='logo'>
					<Link to={'/'}>
						<img src={logo} alt='Logo' />
					</Link>
				</div>
				<ul className='header-nav-links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/cart'>Cart (0)</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
