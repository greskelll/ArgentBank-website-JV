import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	status: 'void',
	data: null,
	token: null,
	error: null,
};

const { actions, reducer } = createSlice({
	name: 'logUser',
	initialState,
	reducers: {
		fetching: {
			reducer: (draft) => {
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
			},
		},
		resolved: {
			reducer: (draft, action) => {
				if (draft.status === 'pending' || draft.status === 'updating') {
					draft.data = action.payload;
					draft.status = 'resolved';
					return;
				}
				return;
			},
		},
		rejected: {
			reducer: (draft) => {
				if (draft.status === 'pending' || draft.status === 'updating') {
					draft.error = `Erreur dans l'identifiant ou le mot de passe`;
					draft.data = null;
					draft.status = 'rejected';
					return;
				}
				return;
			},
		},
		loggedOut: {
			reducer: (draft) => {
				if (draft.status === 'resolved') {
					draft.data = null;
					draft.status = 'void';
					draft.token = null;
					return;
				}
				return;
			},
		},
		tokenSaved: {
			reducer: (draft, action) => {
				draft.token = action.payload;
				return;
			},
		},
		usernameChanged: {
			reducer: (draft, action) => {
				draft.data.body.userName = action.payload;
				return;
			},
		},
	},
});

export function logout(store) {
	store.dispatch(actions.loggedOut());
}
export function userNameChanged(store, newUserName) {
	store.dispatch(actions.usernameChanged(newUserName));
}

export async function logUser(store) {
	const status = store.getState().user.status;

	if (status === 'pending' || status === 'updating') {
		return;
	}
	store.dispatch(actions.fetching());
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
		store.dispatch(actions.tokenSaved(token));
		const getProfile = await fetch(
			'http://localhost:3001/api/v1/user/profile',
			newSettings
		);
		const profileData = await getProfile.json();
		store.dispatch(actions.resolved(profileData));
	} catch (error) {
		store.dispatch(actions.rejected(error));
	}
}

export default reducer;
