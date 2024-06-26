import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
	return <ToastContainer />;
};

const showToast = (message, type = 'success') => {
	switch (type) {
		case 'success':
			toast.success(message, {
				position: 'top-right',
			});
			break;
		case 'error':
			toast.error(message, {
				position: 'top-right',
			});
			break;
		case 'info':
			toast.info(message, {
				position: 'top-right',
			});
			break;
		case 'warn':
			toast.warn(message, {
				position: 'top-right',
			});
			break;
		default:
			toast(message, {
				position: 'top-right',
			});
	}
};

export { Toast, showToast };
