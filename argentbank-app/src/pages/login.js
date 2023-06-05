import '../components/components.css';
import { Form } from '../components/form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userData } from '../utils/selectors';

export function Login() {
	const hasLog = useSelector(userData);
	const navigate = useNavigate();

	useEffect(() => {
		if (hasLog !== null) {
			navigate('/User');
		}
	});

	return (
		<>
			<main className="main bg-dark">
				<Form />
			</main>
		</>
	);
}
