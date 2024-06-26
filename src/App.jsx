import './App.css';
import Navbar from './components/includes/Navbar';
import Login from './components/ui/Login';
import ProductList from './components/ui/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <ProductList /> */}
			<Login />
		</>
	);
}

export default App;
