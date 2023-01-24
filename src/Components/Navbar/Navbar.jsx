import './Navbar.css';
import { useContext } from 'react';
import { context } from '../../App';
import { NavLink } from 'react-router-dom';

function Top() {
	const state = useContext(context);
	return (
		<div className='top'>
			<NavLink to='/'>
				<button className='inclined-button' autoFocus>
					HOME
				</button>
			</NavLink>
			{state.state ? (
				<NavLink to='/news'>
					<button className='inclined-button'>NEWS</button>
				</NavLink>
			) : null}
			{state.state ? (
				<button
					onClick={() => {state.setMenu(!state.menu); state.setOut(!state.out)}}
					className='inclined-button'
				>
					<i className='fas fa-bars'></i>
				</button>
			) : null}
			{state.state && state.favorite.length > 0 ? (
				<NavLink to='/favorites'>
					<button className='inclined-button'>
						<i className='far fa-heart'></i>
					</button>
				</NavLink>
			) : null}

			{state.state ? (
				<>
					<button
						className=' inclined-button'
						onClick={() => state.setState(false)}
					>
						<i className='fas fa-sign-out-alt' />
					</button>
				</>
			) : (
				<>
					<NavLink to='/login'>
						<button className='inclined-button'>LOGIN</button>
					</NavLink>
					<NavLink to='/register'>
						<button className='inclined-button'>REGISTER</button>
					</NavLink>
				</>
			)}
		</div>
	);
}

export default Top;
