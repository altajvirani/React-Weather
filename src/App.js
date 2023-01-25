import './App.css'
import React, { useState, useRef, useEffect } from "react";
import WeatherCard from './components/WeatherCard/WeatherCard';
import Container from 'react-bootstrap/esm/Container';
import axios from "axios"

function App() {
  const date = new Date()
  const cityRef = useRef(null);
  const [cardVis, setCardVis] = useState(false)
  const [city, setCity] = useState("")
  const [weath, setWeather] = useState({})

  const toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toLocaleUpperCase() + m2.toLocaleLowerCase())

  const handleSearchBtn = () => {
    if (cityRef.current.value)
      setCity(toTitleCase(cityRef.current.value))
  }

  const handleKey = e => {
    if (e.key === "Enter")
      handleSearchBtn()
  }

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c05eb6dc52a4edab7f0d97848b95a5fa`
        )
        setWeather(response.data)
        setCardVis(true)
        console.log(response.data)
      } catch (e) {
        setCardVis(false)
      }
    }
    fetchWeather()
  }, [city])

  return (
    <div className="App">
      <nav className="upper-nav">
        <input className="searchField" type="text" placeholder="Search City..." ref={cityRef} onKeyDown={handleKey} autoFocus />
        <button className="search-btn" type="submit" onClick={handleSearchBtn}><img className="search-btn-icon" src="./assets/search_btn_icon.png" alt="" /></button>
      </nav>

      <Container fluid className="main">
        {cardVis && (
          <WeatherCard date={date} city={city} weath={weath} />
        )}
      </Container>
    </div>
  );
}

export default App;
