import './components.css';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

export function Header({ children }) {
	return (
		<nav className="main-nav">
			<Link to={''}>
				<Logo />
			</Link>
			<div>{children}</div>
		</nav>
	);
}
