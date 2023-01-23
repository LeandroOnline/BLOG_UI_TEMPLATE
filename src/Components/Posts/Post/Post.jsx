import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { context } from '../../../App';
import './Post.css';

// A los favoritos los guardo en un arreglo en globalstate con los id [id,id,id] y luego los busco en news y los muestro en la page  Favorites

function Post(props) {
	const globalstate = useContext(context);

	const addFavorite = () => {
		if (globalstate.favorite.includes(props.id)) {
			globalstate.setFavorite(
				globalstate.favorite.filter(id => id !== props.id)
			);
		} else {
			globalstate.setFavorite([...globalstate.favorite, props]);
		}
	};
	console.log(globalstate.favorite);

	return (
		<div className='post'>
			<button onClick={() => addFavorite()} className='postbutton'>
				<img
					className='favorite'
					src='https://cdn.icon-icons.com/icons2/196/PNG/128/heart_23801.png'
					alt='favorite'
				/>
			</button>
			<NavLink to={'/post/' + props.id}>
				<div className='Link'>
					<img className='postimg' src={props.imageUrl} alt='img' />
					<h1 className='h1'>{props.author}</h1>
				</div>
			</NavLink>
		</div>
	);
}

export default Post;
