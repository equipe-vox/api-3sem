import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import { AuthRoutes } from './auth.routes';
import { Login, Home } from '../pages';

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />,
				<Route path="/login" element={<Login />} />,
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
