import logo from '../assets/img/argentBankLogo.png';
import './components.css';

export function Logo() {
	return (
		<>
			<img
				className="main-nav-logo-image"
				src={logo}
				alt="Argent Bank Logo"
			/>
			<h1 className="sr-only">Argent Bank</h1>
		</>
	);
}
