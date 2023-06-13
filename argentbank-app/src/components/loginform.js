import './components.css';
import { Button } from './button';
import { logUser } from '../features/login/user';
import { store } from '../utils/store';
import { loginError } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { Field } from './field';

function log(event) {
	event.preventDefault();
	logUser(store);
}

export function LoginForm() {
	const error = useSelector(loginError);
	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label for="username">Username</label>
					<Field type={'text'} id={'username'} />
				</div>
				<div className="input-wrapper">
					<label for="password">Password</label>
					<Field type={'password'} id={'password'} />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label for="remember-me">Remember me</label>
				</div>
				<Button
					buttonText={'Sign in'}
					onClick={log}
					classStyle={'sign-in-button'}
				/>
				<p className="error">{error}</p>
			</form>
		</section>
	);
}
