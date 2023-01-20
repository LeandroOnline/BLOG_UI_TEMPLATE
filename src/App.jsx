import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './Pages/News/News';
import Navbar from './Components/Navbar/Navbar';
import Favorites from './Pages/Favorites/Favorites';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import { createContext, useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import Get from './utilities/Get';

export const context = createContext();

const App = () => {
	const [state, setState] = useState(false); // logeado o no
	const theme=['technology','business','startup','science','world'];
	const [categorie, setCategorie] = useState(theme[0]);
	const [news, setNews] = useState([]); // sera un [{},{}]
	const [page, setPage] = useState({ start: 0, end: 8 }); // pagina de 8 news
	
	useEffect(() => {
		Get(categorie).then(data => {setNews(data);console.log("Data App");}).catch(e => {console.log('Error en API: '+categorie);});
	}, [categorie]);

	
// necesito cargar todas las categorias por separado, corroborar si tiran error para volverse a cargar por separado
// esto deberia hacerse en algun lugar que no haga re-renderizar el app, sino que se re-renderise solo la categoria que presenta el fallo

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
