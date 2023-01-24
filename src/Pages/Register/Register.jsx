import { Link } from 'react-router-dom';

function Register() {
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>Register</span>
				<form className='loginForm' action=''>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' />
					<label htmlFor=''>Password</label>
					<input type='password' placeholder='Enter your password...' />
					<label htmlFor=''>Repeat password</label>
					<input type='password' placeholder='Enter your password...' />
					<Link to='/login'>
						<button className='loginFormbutton'>Register</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Register;
