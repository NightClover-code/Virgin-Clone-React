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
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  //
  const dropDowns = [];
  //getting the dropDown ref
  const getRef = listsRef => {
    setTimeout(() => {
      dropDowns.push(listsRef.current);
    }, 20);
  };
  //hover dropdown functions
  const onItemHover = target => {
    dropDowns.forEach(dropDown => {
      if (
        dropDown.getAttribute('id') ===
        target.getAttribute('data-id')
      ) {
        dropDown.classList.add('active');
      } else {
        dropDown.classList.remove('active');
      }
    });
  };
  return (
    <div className="app-container">
      <Header />
      <NavBar onItemHover={onItemHover} />
      <Showcase getRef={ref => getRef(ref)} />
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
