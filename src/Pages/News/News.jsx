import Categories from '../../Components/Categories/Categories';
import Posts from '../../Components/Posts/Posts';

import './News.css';

function News() {
	return (
		<div className='home'>
			<div>
				<Categories />
				<Posts />
			</div>
		</div>
	);
}

export default News;
