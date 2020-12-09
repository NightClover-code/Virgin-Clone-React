//all app styling
import './css/app.css';

//importing components
import Header from './components/Header';
import NavBar from './components/NavBar';
import Showcase from './components/Showcase';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<NavBar />
			<Showcase />
		</div>
	);
};

export default App;
