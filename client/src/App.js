import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './routes/Private';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<PrivateRoute />}>
					<Route path='' element={<Dashboard />} />
				</Route>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/policy' element={<Policy />} />
				<Route path='*' element={<PageNotFound />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
