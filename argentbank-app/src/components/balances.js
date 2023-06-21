import { Account } from './account';

export function Balances() {
	/* return mock data while Balances API is in development */
	return (
		<>
			<h2 className="sr-only">Accounts</h2>
			<Account
				account={'Argent Bank Checking (x8349)'}
				amount={'$2,082.79'}
				qualification={'Available Balance'}
			/>
			<Account
				account={'Argent Bank Savings (x6712)'}
				amount={'$10,928.42'}
				qualification={'Available Balance'}
			/>
			<Account
				account={'Argent Bank Credit Card (x8349)'}
				amount={'$184.30'}
				qualification={'Current Balance'}
			/>
		</>
	);
}
