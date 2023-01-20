import { useContext } from 'react';
import { context } from '../../App';
import './categories.css';

function Categories() {
	const globalstate = useContext(context);
	return (
		<div
			onClick={() => globalstate.setPage({ start: 0, end: 6 })}
			className='categories'
		>
			<button
				onClick={() => globalstate.setCategorie(globalstate.theme[0])}
				className='categoriesbutton'
			>
				Technology
			</button>
			<button
				onClick={() => globalstate.setCategorie(globalstate.theme[1])}
				className='categoriesbutton'
			>
				Business
			</button>
			<button
				onClick={() => globalstate.setCategorie(globalstate.theme[2])}
				className='categoriesbutton'
			>
				Startup
			</button>
			<button
				onClick={() => globalstate.setCategorie(globalstate.theme[3])}
				className='categoriesbutton'
			>
				Science
			</button>
			<button
				onClick={() => globalstate.setCategorie(globalstate.theme[4])}
				className='categoriesbutton'
			>
				World
			</button>
		</div>
	);
}
export default Categories;
