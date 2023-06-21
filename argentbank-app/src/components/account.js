import './components.css';
import { Button } from './button';

export function Account({ account, amount, qualification }) {
	return (
		<>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">{account}</h3>
					<p className="account-amount">{amount}</p>
					<p className="account-amount-description">
						{qualification}
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<Button
						classStyle={'transaction-button'}
						buttonText={'View transactions'}
					/>
				</div>
			</section>
		</>
	);
}
