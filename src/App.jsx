import './App.css';
import Navbar from './components/includes/Navbar';
import Login from './components/ui/Login';
import ProductList from './components/ui/products/ProductList';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toast } from './components/common/Toast';
import Signup from './components/ui/Signup';
import Cart from './components/ui/Cart';
import Checkout from './components/ui/Checkout';
import ProductDetails from './components/ui/products/ProductDetails';
import PageNotFound from './components/ui/PageNotFound';
import Layout from './components/ui/Layout';

function App() {
	const location = useLocation();
	const pathName = location.pathname;

	return (
		<>
			<Toast />
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/signUp'
					element={<Signup />}
				/>
				<Route
					path='/dashboard'
					element={
						<Layout>
							<ProductList />
						</Layout>
					}
				/>
				<Route
					path='/cart'
					element={
						<Layout>
							<Cart />
						</Layout>
					}
				/>
				<Route
					path='/checkout'
					element={
						<Layout>
							<Checkout />
						</Layout>
					}
				/>
				<Route
					path='/product-details'
					element={
						<Layout>
							<ProductDetails />
						</Layout>
					}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</>
	);
}

export default App;
