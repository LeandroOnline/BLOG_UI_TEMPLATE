import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import News from './Pages/News/News';
import Navbar from './Components/Navbar/Navbar';
import Favorites from './Pages/Favorites/Favorites';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import Get from './utilities/Get';

export const context = createContext();

const App = () => {
	const [state, setState] = useState(false); // logeado o no
	const theme = ['technology', 'business', 'startup', 'science', 'world'];
	const [categorie, setCategorie] = useState(theme[0]);
	const [news, setNews] = useState([]); // sera un [{},{}]
	const [page, setPage] = useState({ start: 0, end: 8 }); // pagina de 8 news
	const [favorite, setFavorite] = useState([]);
	const [menu, setMenu] = useState(false);
	const [out, setOut] = useState(true);

	useEffect(() => {
		Get(categorie)
			.then(data => {
				setNews(data);
				console.log('Data App');
			})
			.catch(e => {
				console.log('Error en API: ' + categorie);
			});
	}, [categorie]);

	return (
		<context.Provider
			value={{
				state,
				setState,
				categorie,
				setCategorie,
				news,
				setNews,
				page,
				setPage,
				theme,
				setFavorite,
				favorite,
				setMenu,
				menu,
				setOut,
				out,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={state ? <News /> : <Home />} />
					<Route path='/favorites' element={state ? <Favorites /> : <Home />} />
					<Route path='/login' element={!state ? <Login /> : <News />} />
					<Route path='/register' element={<Register />} />
					<Route path='/post/:id' element={<Details />} />
				</Routes>
			</BrowserRouter>
		</context.Provider>
	);
};

export default App;
