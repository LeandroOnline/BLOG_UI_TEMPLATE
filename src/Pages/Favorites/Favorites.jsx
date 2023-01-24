import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { context } from '../../App';
import Post from '../../Components/Posts/Post/Post';
import './Favorites.css';

function Favorites() {
	const globalstate = useContext(context);

	useEffect(() => {
		console.log('change favorite app');
	}, [globalstate.favorite]);

	if (globalstate.favorite.length === 0) return <Navigate to='/news' />;

	return (
		<div className='favoritesconteiner'>
			{globalstate.favorite?.map((id, index) => {
				const fav = globalstate.news.data.filter(index => index.id === id);
				if (globalstate.news.data) {
					return (
						<Post
							author={fav[0].title}
							imageUrl={fav[0].imageUrl}
							key={index}
							id={fav[0].id}
						/>
					);
				} else return null;
			})}
		</div>
	);
}

export default Favorites;
