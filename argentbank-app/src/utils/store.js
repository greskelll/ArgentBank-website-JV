import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/user';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

/* on utilise redux-persist pour faire persister le state userReducer via le localStorage */

export const store = configureStore({
	reducer: {
		user: persistedReducer,
		middleware: [thunk],
	},
});

export const persistor = persistStore(store);
