import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
	status: 'void',
	data: null,
	token: null,
	error: null,
};

const loginFetching = createAction('login/fetching');
const loginResolved = createAction('login/resolved');
const loginRejected = createAction('login/rejected');
const loginLogout = createAction('login/logout');
const loginToken = createAction('login/token');
const loginUserNameChanged = createAction('login/changedUser');

export function logout(store) {
	store.dispatch(loginLogout());
}
export function userNameChanged(store) {
	store.dispatch(loginUserNameChanged());
}

export async function logUser(store) {
	const status = store.getState().user.status;

	if (status === 'pending' || status === 'updating') {
		return;
	}
	store.dispatch(loginFetching());
	const email = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	};
	try {
		const response = await fetch(
			'http://localhost:3001/api/v1/user/login',
			settings
		);
		const data = await response.json();
		const token = data.body.token;

		const newSettings = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		store.dispatch(loginToken(token));
		const getProfile = await fetch(
			'http://localhost:3001/api/v1/user/profile',
			newSettings
		);
		const profileData = await getProfile.json();
		console.log(profileData);
		store.dispatch(loginResolved(profileData));
	} catch (error) {
		store.dispatch(loginRejected(error));
	}
}

export default createReducer(initialState, (builder) =>
	builder
		.addCase(loginFetching, (draft) => {
			if (draft.status === 'void') {
				draft.status = 'pending';
				return;
			}
			if (draft.status === 'rejected') {
				draft.error = null;
				draft.status = 'pending';
				return;
			}
			if (draft.status === 'resolved') {
				draft.status = 'updating';
				return;
			}
			return;
		})
		.addCase(loginResolved, (draft, action) => {
			if (draft.status === 'pending' || draft.status === 'updating') {
				draft.data = action.payload;
				draft.status = 'resolved';
				return;
			}
			return;
		})
		.addCase(loginRejected, (draft, action) => {
			if (draft.status === 'pending' || draft.status === 'updating') {
				draft.error = action.payload;
				draft.data = null;
				draft.status = 'rejected';
				return;
			}
			return;
		})
		.addCase(loginLogout, (draft) => {
			if (draft.status === 'resolved') {
				draft.data = null;
				draft.status = 'void';
				return;
			}
			return;
		})
		.addCase(loginToken, (draft, action) => {
			draft.token = action.payload;
			return;
		})
		.addCase(loginUserNameChanged, (draft) => {
			draft.data.body.userName =
				document.getElementById('new_username').value;
			return;
		})
);
