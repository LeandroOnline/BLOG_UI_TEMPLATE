import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../App';
import './Login.css';

function Login() {
	const state = useContext(context);
	const navigate = useNavigate();
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>Login</span>
				<form className='loginForm' action=''>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' />
					<label htmlFor=''>Password</label>
					<input type='password' placeholder='Enter your password...' />
					<button
						to='/'
						onClick={e => {
							e.preventDefault();
							navigate('/');
							state.setState(true);
						}}
						className='loginFormbutton'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;

// ok
