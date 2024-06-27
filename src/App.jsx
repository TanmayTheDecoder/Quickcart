import './App.css';
import Navbar from './components/includes/Navbar';
import Login from './components/ui/Login';
import ProductList from './components/ui/ProductList';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toast } from './components/common/Toast';
import Signup from './components/ui/Signup';
import Cart from './components/ui/Cart';
import Checkout from './components/ui/Checkout';

function App() {
	const location = useLocation();
	const pathName = location.pathname;

	const renderIncludes = () => {
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
			{renderIncludes()}
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
				<Route
					path='/cart'
					element={<Cart />}
				/>
				<Route
					path='/checkout'
					element={<Checkout />}
				/>
			</Routes>
		</>
	);
}

export default App;
