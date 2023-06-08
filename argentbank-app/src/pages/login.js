import '../components/components.css';
import { LoginForm } from '../components/loginform';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userData } from '../utils/selectors';

export function Login() {
	const hasLog = useSelector(userData);
	const navigate = useNavigate();

	useEffect(() => {
		if (hasLog !== null) {
			navigate('/Profile');
		}
	});

	return (
		<>
			<main className="main bg-dark">
				<LoginForm />
			</main>
		</>
	);
}
