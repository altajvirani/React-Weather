import './WeatherCard.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useState, useEffect } from "react"
import axios from "axios"

function WeatherCard({ city }) {
    const date = new Date()
    const [weath, setWeather] = useState({})
    useEffect(() => {
        async function fetchWeather() {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c05eb6dc52a4edab7f0d97848b95a5fa`
            )
            setWeather(response.data)
            console.log(response.data)
        }
        fetchWeather()
    }, [city])

    return (
        <div>
            {weath.name && (
                <Container fluid className="main">
                    <Container className="card">
                        <Row className="upper">
                            <Col>
                                <Row className="city">
                                    <Col>
                                        <span className="bold">{city}</span>
                                    </Col>
                                    <Col className="col-1 remove">
                                        <button className="remove-card" value="removeCard">
                                            <img className="remove-card-icon" src="./assets/remove_card_icon.png" alt="remove-city" />
                                        </button>
                                    </Col>
                                </Row>
                                <Row className="time">
                                    <Col className="col-1" style={{ width: "max-content" }}>
                                        <button className="cal">
                                            <img className="cal-icon" src="./assets/cal_icon.png" alt="calendar" />
                                        </button>
                                    </Col>
                                    <Col>
                                        <span className="regular">{date.toLocaleTimeString('en-US', { weekday: 'short' })}</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="middle">
                            <Col>
                                <img className="weather-icon" src="./assets/sunny.png" alt="weather-logo" />
                            </Col>
                            <div className='grid'>
                                <span className="temp bold">{(weath.main.temp - 273.15).toFixed(0) + "° C"}</span>
                            </div>
                            <div className='grid'>
                                <span className="weather regular">{weath.weather[0].main}</span>
                            </div>
                        </Row>
                        <Row className="lower">
                            <Col className="col-1 icon">
                                <button className="highest-temp">
                                    <img className="highest-temp-icon" src="./assets/highest_temp_icon.png" alt="" />
                                </button>
                            </Col>
                            <Col>
                                <Row>
                                    <span className="high regular">Highest</span>
                                </Row>
                                <Row>
                                    <span className="high bold">{(weath.main.temp_max - 273.15).toFixed(0) + "° C"}</span>
                                </Row>
                            </Col>
                            <Col className="col-1 icon">
                                <button className="lowest-temp">
                                    <img className="lowest-temp-icon" src="./assets/lowest_temp_icon.png" alt="" />
                                </button>
                            </Col>
                            <Col>
                                <Row>
                                    <span className="regular">Lowest</span>
                                </Row>
                                <Row>
                                    <span className="bold">{(weath.main.temp_min - 273.15).toFixed(0) + "° C"}</span>
                                </Row>
                            </Col>
                            <Col className="col-1 icon end">
                                <button value="showHideDetails" className="show-details">
                                    <img className="show-details-icon" src="./assets/show_details_icon.png" alt="show-details" />
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )}
        </div>
    )
}

export default WeatherCard
