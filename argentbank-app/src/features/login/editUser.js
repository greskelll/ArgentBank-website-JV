import { store } from '../../utils/store';
import { userNameChanged } from './user';

export async function fetchUserEdit() {
	const newUserName = document.getElementById('new_username').value;
	const state = store.getState();
	const token = state.user.token;
	const settings = {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			userName: newUserName,
		}),
	};
	try {
		const response = await fetch(
			'http://localhost:3001/api/v1/user/profile',
			settings
		);
		const data = await response.json();
		userNameChanged(store);
		console.log(data);
	} catch (error) {
		alert(error);
	}
}
