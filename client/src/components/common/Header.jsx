import React from 'react';
import logo from '../../assets/icons/logo.png';
import '../../assets/styles/common/header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

const Header = () => {
	const [auth, setAuth] = useAuth();

	const handleLogout = () => {
		setAuth({
			...auth,
			user: null,
			token: '',
		});
		localStorage.removeItem('auth');
		toast.success('Logout Successful');
	};

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
					{!auth.user ? (
						<>
							<li>
								<Link to='/register'>Register</Link>
							</li>
							<li>
								<Link to='/login'>Login</Link>
							</li>
						</>
					) : (
						<li>
							<Link
								to='/login'
								onClick={() => {
									handleLogout();
								}}
							>
								Logout
							</Link>
						</li>
					)}
					<li>
						<Link to='/cart'>Cart (0)</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
