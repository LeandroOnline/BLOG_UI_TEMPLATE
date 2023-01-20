import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Right.css';
import { context } from '../../../App';

function Rigth() {
	const state = useContext(context);
	return (
		<div className='right'>
			{state.state ? (
				<>
					Hola Lea !
					<img
						className='rigthimg'
						src='https://i.pinimg.com/736x/f9/db/5d/f9db5da23ee12c903f1a74dfb1447c21.jpg'
						alt=''
					/>
					<button className='rightbutton' onClick={() => state.setState(false)}>
						<i className='fas fa-sign-out-alt' />
					</button>
				</>
			) : (
				<>
					<NavLink to='/login'>LOGIN</NavLink>
					<NavLink to='/register'>REGISTER</NavLink>{' '}
				</>
			)}
		</div>
	);
}

export default Rigth;
