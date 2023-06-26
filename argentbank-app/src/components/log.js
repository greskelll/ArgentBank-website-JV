import './components.css';
import { Link } from 'react-router-dom';
import { userData } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { Button } from './button';
import { logout } from '../features/login/user';
import { store } from '../utils/store';

function logoutUser(event) {
	event.preventDefault();
	logout(store);
}

export function Log() {
	const logged = useSelector(userData) !== null;
	const name = useSelector(userData)?.body.userName;
	return logged ? (
		<div>
			<Link to={'/Profile'}>
				<i className="fa fa-user-circle"></i>
				{name}
			</Link>
			<i class="fa fa-sign-out"></i>
			<Button
				classStyle={'sign_out'}
				buttonText={'Sign Out'}
				onClick={logoutUser}
			></Button>
		</div>
	) : (
		<Link to={'Login'}>
			<i className="fa fa-user-circle"></i>
			Sign In
		</Link>
	);
}
