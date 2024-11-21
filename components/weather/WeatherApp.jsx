import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '91190f5c6ba9067391d512ef0e6cd6f4'; // Replace with your OpenWeatherMap API key

  // Function to get weather data
  const getWeather = async () => {
    if (!city) return;

    try {
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      console.log(response.data)
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className="description">
        <br />
      <h1 className='header'>Weather Forecast</h1>
        <div className="conbtn">
               <form onSubmit={handleSearch} className='forminput'>
                 <input
                   type="text"
                   placeholder="EX. bangkok , hanoi"
                   value={city}
                   onChange={handleInputChange}
                   className='inputfeidl'
                 />
           {/* <div className="conbtn"> */}
             <div className="buttons">
               <button type="submit" className="btn" role="button"><span></span><p data-start="good luck!" data-text="Searching" data-title="Search!"></p></button>
             </div>
           {/* </div> */}
      
            {error && <p className="error">{error}</p>}
            {weatherData && (
              <div className="weather-info">
                <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                <p id='p1'>Temperature: {weatherData.main.temp}°C</p>
                <p id='p2'>Humidity: {weatherData.main.humidity}%</p>
                <p id='p3'>Wind Speed: {weatherData.wind.speed} m/s</p>
                <p id='p4'>Weather: {weatherData.weather[0].description}</p>
              </div>
            )}
     
     
     
     </form>
      </div>
    </div>
  




);
}

export default WeatherApp;
