import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';
const API_KEY = '91f8e8693af6b370dfdfc29c4d6d1158';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios.get(`${API_URL}&lat=${latitude}&lon=${longitude}`)
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
          const { main } = response.data.weather[0];
          setDisasters(getDisasters(main));
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    });
  }, []);

  const getDisasters = (weatherType) => {
    const disasters = [];
    switch (weatherType) {
      case 'Thunderstorm':
        disasters.push('Thunderstorm');
        disasters.push('Lightning');
        disasters.push('Hail');
        break;
      case 'Drizzle':
        disasters.push('Flood');
        break;
      case 'Rain':
        disasters.push('Flood');
        disasters.push('Landslide');
        break;
      case 'Snow':
        disasters.push('Snowstorm');
        disasters.push('Avalanche');
        break;
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Fog':
        disasters.push('Poor Visibility');
        break;
      case 'Tornado':
        disasters.push('Tornado');
        break;
      case 'Clear':
      case 'Clouds':
      default:
        break;
    }
    return disasters;
  };

  const renderWeather = () => {
    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (error) {
      return <div className="error">Oops, something went wrong.</div>;
    }

    const { main, description } = weatherData.weather[0];
    const { temp } = weatherData.main;
    const { name } = weatherData;

    return (
      <div className="weather-data">
        <div className="location">{name}</div>
        <div className="temperature">{temp} &deg;C</div>
        <div className="weather-description">{description}</div>
        <div className="disasters">
          Probable Disasters: 
          {disasters.map(disaster => (
            <div key={disaster} className="disaster-item">{disaster}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
    <Navbar/>
    <div className="weather-app">
      <h1 style={{ color: "#1a2a6c" }}>Real Time Weather Monitoring</h1> 
      {renderWeather()}
    </div>
     <Footer/>
    </div>
  );
};

export default WeatherApp;