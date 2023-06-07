import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import Root from './routes/root';
import ErrorPage from './pages/error-pages';
import { Login } from './pages/login';
import { User } from './pages/user';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'Login',
				element: <Login />,
			},
			{
				path: 'Profile',
				element: <User />,
			},
		],
	},
]);
