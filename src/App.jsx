import './App.css';
import Navbar from './components/includes/Navbar';
import Login from './components/ui/Login';
import ProductList from './components/ui/ProductList';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toast } from './components/common/Toast';
import Signup from './components/ui/Signup';

function App() {
	const location = useLocation();
	const pathName = location.pathname;

	const renderNavbar = () => {
		switch (pathName) {
			case '/':
				return null;
			case '/signup':
				return null;
			default:
				return <Navbar />;
		}
	};

	return (
		<>
			<Toast />
			{renderNavbar()}
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/dashboard'
					element={<ProductList />}
				/>
				<Route
					path='/signUp'
					element={<Signup />}
				/>
			</Routes>
		</>
	);
}

export default App;
