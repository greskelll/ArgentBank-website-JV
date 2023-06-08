import '../components/components.css';
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userData } from '../utils/selectors';
import { EditUser } from '../components/editusername';

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

	return (
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
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Checking (x8349)
					</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">
						Available Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<Button
						classStyle={'transaction-button'}
						buttonText={'View transactions'}
					/>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Savings (x6712)
					</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">
						Available Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">
						View transactions
					</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Credit Card (x8349)
					</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">
						Current Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">
						View transactions
					</button>
				</div>
			</section>
		</main>
	);
}
