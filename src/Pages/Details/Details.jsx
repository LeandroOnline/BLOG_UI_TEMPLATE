import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../../App';
import './details.css';

// mediante el parametro busco la noticia en news para mostrarla y luego con el setPost cambio de noticia

function Details() {
	const { id } = useParams();
	const { news } = useContext(context);
	const [post, setPost] = useState(news.data.filter(index => index.id === id));

	return (
		<div className='detailsconteiner'>
			<img src={post[0].imageUrl} alt='' />
			<h1>{post[0].title}</h1>
			<p>
				{post[0].date} at {post[0].time}
			</p>
			<p>{post[0].content}</p>
			<div className='detailsbutton'>
				<button onClick={() => window.open(post[0].readMoreUrl)}>
					Read More
				</button>
				<button
					onClick={() =>
						setPost([news.data[Math.floor(Math.random() * news.data.length)]])
					}
				>
					Next New
				</button>
			</div>
		</div>
	);
}
export default Details;

// OK
