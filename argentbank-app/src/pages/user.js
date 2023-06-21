import '../components/components.css';
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userData } from '../utils/selectors';
import { EditUser } from '../components/editusername';
import { Balances } from '../components/balances';

export function User() {
	const hasLog = useSelector(userData);
	const navigate = useNavigate();
	const firstName = useSelector(userData)?.body.firstName;
	const lastName = useSelector(userData)?.body.lastName;

	useEffect(() => {
		if (hasLog === null) {
			navigate('/');
		}
	});

	return hasLog ? (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{`${firstName} ${lastName}`}
				</h1>
				<EditUser>
					{({ setIsOpened }) => (
						<Button
							onClick={() => setIsOpened(true)}
							classStyle={'edit-button'}
							buttonText={'Edit Name'}
						/>
					)}
				</EditUser>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<Balances />
		</main>
	) : (
		<></>
	);
}
