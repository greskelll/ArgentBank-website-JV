import './components.css';
import { Motto } from './argentBankMotto';

export function Banner({ className }) {
	/* css className contain background img */
	return (
		<div className={className}>
			<Motto />
		</div>
	);
}
