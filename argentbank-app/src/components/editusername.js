import { Button } from './button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../utils/selectors';
import { fetchUserEdit } from '../features/login/editUser';

function launchEdit(event) {
	event.preventDefault();
	fetchUserEdit();
}

export function EditUser({ opened = false, children }) {
	const [isOpened, setIsOpened] = useState(opened);
	const firstName = useSelector(userData)?.body.firstName;
	const lastName = useSelector(userData)?.body.lastName;
	return (
		<>
			{children({ isOpened, setIsOpened })}
			{isOpened && (
				<form className="edit-form">
					<div className="input-wrapper">
						<label for="username">User name</label>
						<input type="text" id="new_username" required />
					</div>
					<div className="input-wrapper">
						<label for="firstname">First name</label>
						<input
							type="text"
							id="firstname"
							value={firstName}
							required
						/>
					</div>
					<div className="input-wrapper">
						<label for="lastname">Last name</label>
						<input
							type="text"
							id="lastname"
							value={lastName}
							required
						/>
					</div>
					<Button
						buttonText={'Save'}
						onClick={launchEdit}
						classStyle={'sign-in-button'}
					/>
					<Button
						buttonText={'Cancel'}
						type="button"
						onClick={() => setIsOpened(false)}
						classStyle={'sign-in-button'}
					/>
				</form>
			)}
		</>
	);
}
