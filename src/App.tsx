import React from 'react';
import logo from './logo.svg';
import './App.css';
import Showcase from './components/showcase/showcase.component';
import Navigation from './components/navigation/navigation.component';
import AdvancedContainer from './components/advanced-container/advanced-container.component';
import Services from './components/services/services.component';
import Client from './components/client/client.component';
import Countries from './components/countries/countries.component';
import LittleSection from './components/little-container/little.cont.component';
import Footer from './components/footer/footer.component';

function App() {
 return (
  <><Navigation /><Showcase /><AdvancedContainer/><Services/><Client/><Countries/><LittleSection/><Footer/></>
 );
}

export default App;
