import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { context } from '../../App';
import axios from 'axios';
import './Login.css';

const API = 'https://new-server-alpha.vercel.app/api/login';

function Login() {
	const state = useContext(context);
	// const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');

	const loginOk = e => {
		e.preventDefault();
		axios
			.post(API, { email, password })
			.then(res =>
				res.data === 'incorrect password' || res.data === 'user not found'
					? window.alert('Usuario o Contraseña incorrecta, intente nuevamente')
					: state.setState(true)
			)
			.then(() => (state ? console.log('OK') : console.log('Error')));
	};

	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>Login</span>
				<form className='loginForm' action='' onSubmit={loginOk}>
					<label htmlFor=''>Email o Username</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type='text'
						placeholder='Enter your email...'
					/>
					<label htmlFor=''>Password</label>
					<input
						onChange={e => setPasword(e.target.value)}
						placeholder='Enter your password...'
						type='password'
					/>
					<button type='submit' className='loginFormbutton'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;

// ok
