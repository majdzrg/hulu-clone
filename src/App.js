import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests';
import Resultas from './Resultas';


function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">     
    <Header />

     <Nav setSelectedOption={setSelectedOption}/>

    <Resultas selectedOption={selectedOption} />
    </div>
  );
}

export default App;
