import './components.css';
import { Link } from 'react-router-dom';
import { userData } from '../utils/selectors';
import { useSelector } from 'react-redux';

export function Log() {
	const logged = useSelector(userData) !== null;
	const name = useSelector(userData)?.body.userName;
	return logged ? (
		<div>
			<Link to={''}>
				<i className="fa fa-user-circle"></i>
				{name}
			</Link>
			<Link to={''}>
				<i className="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</div>
	) : (
		<Link to={'Login'}>
			<i className="fa fa-user-circle"></i>
			Sign In
		</Link>
	);
}
