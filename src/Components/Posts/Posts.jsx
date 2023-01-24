import Post from './Post/Post';
import Loading from '../../utilities/Loading';
import './Posts.css';
import { useContext } from 'react';
import { context } from '../../App';
import Pagination from '../Pagination/Pagination';

function Posts() {
	const globalstate = useContext(context);

	if (!globalstate.news) return <Loading />;
	return (
		<div className='post-pagination'>
			<Pagination />
			<div className='posts'>
				{globalstate.news.data
					?.slice(globalstate.page.start, globalstate.page.end)
					?.map(post => (
						<Post
							author={post.title}
							imageUrl={post.imageUrl}
							key={post.id}
							id={post.id}
						/>
					))}
			</div>
		</div>
	);
}

export default Posts;
