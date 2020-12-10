//all app styling
import './css/app.css';

//importing components
import Header from './components/Header';
import NavBar from './components/NavBar';
import Scoop from './components/Scoop';
import Showcase from './components/Showcase';
import VirginCompanies from './components/VirginCompanies/VirginCompanies';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<NavBar />
			<Showcase />
			<VirginCompanies />
			<Scoop />
		</div>
	);
};

export default App;
