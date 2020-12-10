//all app styling
import './css/app.css';

import AdditionalInfo from './components/AdditionalInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Scoop from './components/Scoop/Scoop';
import Showcase from './components/Showcase';
import SocialMedia from './components/SocialMedia';
//TODO refactor scoop
//importing components
import VirginCompanies from './components/VirginCompanies/VirginCompanies';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<NavBar />
			<Showcase />
			<VirginCompanies />
			<Scoop />
			<SocialMedia />
			<AdditionalInfo />
			<Footer />
		</div>
	);
};

export default App;
