import './App.css'
import React, { useState, useRef } from "react";
import WeatherCard from './components/WeatherCard';
import Container from 'react-bootstrap/esm/Container';
function App() {
  const cityRef = useRef(null)
  const [inp, setCity] = useState("");
  let hideCard = false;
  const handleSearchBtn = () => {
    if (cityRef.current.value) {
      setCity(cityRef.current.value)
    }
  };
  const handleEnter = e => {
    if (e.key === 'Enter')
      setCity(cityRef.current.value)
    else if (e.key === 'Backspace' && !cityRef.current.value)
      hideCard = true;
    else
      hideCard = false;
  };

  return (
    <div className="App">
      <nav className="upper-nav">
        <input className="searchField" type="text" placeholder="Search City..." ref={cityRef} onKeyDown={handleEnter} />
        <button className="search-btn" type="submit" onClick={handleSearchBtn}><img className="search-btn-icon" src="./assets/search_btn_icon.png" alt="" /></button>
      </nav>
      {!hideCard && cityRef &&
        (<Container fluid className="main">
          <WeatherCard city={inp} />
        </Container>)}
    </div>
  );
}

export default App;
