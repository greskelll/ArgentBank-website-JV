import { Button } from './button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../utils/selectors';
import { fetchUserEdit } from '../features/login/editUser';
import { Field } from './field';

export function EditUser({ opened = false, children }) {
	const [isOpened, setIsOpened] = useState(opened);
	const firstName = useSelector(userData)?.body.firstName;
	const lastName = useSelector(userData)?.body.lastName;
	const userName = useSelector(userData)?.body.userName;
	const [currentUserName, setCurrentUserName] = useState(userName);
	function launchEdit(event) {
		event.preventDefault();
		fetchUserEdit(currentUserName);
		setIsOpened(false);
	}
	useEffect(() => {
		console.log(userName);
	}, [userName]);
	return (
		<>
			{children({ isOpened, setIsOpened })}
			{isOpened && (
				<form className="edit-form">
					<div className="input-wrapper">
						<label htmlFor="username">User name</label>
						<Field
							type={'text'}
							id={'new_username'}
							value={currentUserName}
							onChange={(e) => {
								setCurrentUserName(e.target.value);
							}}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="firstname">First name</label>
						<Field
							type={'text'}
							id={'firstname'}
							value={firstName}
							readOnly
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastname">Last name</label>
						<Field
							type={'text'}
							id={'lastname'}
							value={lastName}
							readOnly
						/>
					</div>
					<Button
						buttonText={'Save'}
						onClick={launchEdit}
						classStyle={'edit-button'}
					/>
					<Button
						buttonText={'Cancel'}
						type="button"
						onClick={() => setIsOpened(false)}
						classStyle={'edit-button'}
					/>
				</form>
			)}
		</>
	);
}
