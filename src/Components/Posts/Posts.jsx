import Post from './Post/Post';
import post from '../../constants/posts.json';
import './Posts.css';

function Posts() {
	return (
		<div className='posts'>
			{post.map(post => (
				<Post
					category={post.category}
					image={post.image}
					id={post.id}
					key={post.id}
					overview={post.overview}
					time={post.time}
					title={post.title}
				/>
			))}
		</div>
	);
}

export default Posts;
