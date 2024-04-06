import React from 'react';
import '../../assets/styles/button.css';
export const OutlinedButton = ({ text, onClick }) => {
	return (
		<button className='outlined-button' onClick={onClick}>
			{text}
		</button>
	);
};
