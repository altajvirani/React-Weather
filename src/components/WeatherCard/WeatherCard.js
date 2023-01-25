import './WeatherCard.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from "react"

function WeatherCard({ date, city, weath }) {
    let icon_url;
    const weathDesc = weath.weather[0]
    switch (weathDesc['main'].toLowerCase()) {
        case 'thunderstorm':
            if (weathDesc['description'] === 'thunderstorm')
                icon_url = require('./weather_icons/thunderstorms.png')
            else
                icon_url = require('./weather_icons/heavy_showers.png')
            break
        case 'drizzle':
        case 'rain':
            icon_url = require('./weather_icons/rain.png')
            break
        case 'snow':
            if (weathDesc['description'] === 'Heavy snow' || weathDesc['description'] === 'Heavy shower snow')
                icon_url = require('./weather_icons/heavy_snow.png')
            else
                icon_url = require('./weather_icons/snow.png')
            break
        case 'mist':
        case 'dust':
        case 'smoke':
        case 'haze':
        case 'fog':
        case 'ash':
        case 'squal':
        case 'tornado':
            icon_url = require('./weather_icons/mist_fog_smoke_haze.png')
            break
        case 'clouds':
            if (weathDesc['description'] === 'few clouds')
                icon_url = require('./weather_icons/partly_clouded_day.png')
            else
                icon_url = require('./weather_icons/clouded.png')
            break
        default:
            icon_url = require('./weather_icons/clear_day.png')
    }

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
                                    <Col className="col-1">
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
                                <img className="weather-icon" src={icon_url} alt="weather-logo" />
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
