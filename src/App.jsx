//all app styling
import './css/app.css';

import AdditionalInfo from './components/AdditionalInfo';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Scoop from './components/Scoop/Scoop';
import Showcase from './components/Showcase';
import SocialMedia from './components/SocialMedia';
//importing components
import VirginCompanies from './components/VirginCompanies/VirginCompanies';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Showcase />
      <VirginCompanies
        counter={counter}
        setCounter={setCounter}
      />
      <Scoop />
      <SocialMedia />
      <AdditionalInfo />
      <Footer />
    </div>
  );
};

export default App;
