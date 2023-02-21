import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../App';
import Categories from '../../Components/Categories/Categories';

import './Home.css';

function Home() {
	const globalstate = useContext(context);
	// console.log("Carga de Home");
	return (
		<div className='all'>
			<Categories />

			<div className='titles'>
				<span className='blog'>NEWS</span>
			</div>
			<div className='header'>
				<Link
					onClick={() => globalstate.setCategorie('science')}
					to={globalstate.state ? '/news' : '/login'}
				>
					<img
						className='img img1'
						src='https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg?w=2000'
						alt='imgPortada'
					/>
				</Link>

				<Link
					onClick={() => globalstate.setCategorie('business')}
					to={globalstate.state ? '/news' : '/login'}
				>
					<img
						className='img img2'
						src='https://i.ytimg.com/vi/Dy8jU7aD9YI/maxresdefault.jpg'
						alt='imgPortada'
					/>
				</Link>

				<Link
					onClick={() => globalstate.setCategorie('technology')}
					to={globalstate.state ? '/news' : '/login'}
				>
					<img
						className='img img1'
						src='https://thumbs.dreamstime.com/b/technology-concept-word-art-illustration-word-technology-concept-written-colorful-abstract-typography-vector-eps-available-119088457.jpg'
						alt='imgPortada'
					/>
				</Link>

				<Link
					onClick={() => globalstate.setCategorie('startup')}
					to={globalstate.state ? '/news' : '/login'}
				>
					<img
						className='img img2'
						src='https://economia3.com/wp-content/uploads/2022/10/Why-Startups-are-More-Popular-than-Ever.jpg'
						alt='imgPortada'
					/>
				</Link>
			</div>
		</div>
	);
}

export default Home;
