import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const overrides = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
};

const Spinner = () => {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((prevCount) => --prevCount);
		}, 1000);
		count === 0 && navigate('/login');
		return () => clearInterval(timer);
	}, [count, navigate]);

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#025EF7',
				gap: '20px',
			}}
		>
			<h1>Redirecting in {count}</h1>
			<HashLoader color={'#025EF7'} cssOverride={overrides} size={60} />
		</div>
	);
};

export default Spinner;
