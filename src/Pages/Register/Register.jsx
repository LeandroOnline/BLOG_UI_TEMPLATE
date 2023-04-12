// import { Link } from 'react-router-dom';
const API = 'http://localhost:3000/api/register';


function Register() {
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>Register</span>
				<form className='loginForm' action={API} method='POST'>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' name='email'/>
					<label htmlFor=''>Password</label>
					<input type='password' placeholder='Enter your password...' name='password'/>
					<label htmlFor=''>Repeat password</label>
					<input type='password' placeholder='Enter your password...' />
					<button type='submit' className='loginFormbutton'>Register</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
