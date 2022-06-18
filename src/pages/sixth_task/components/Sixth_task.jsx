import React, { useState } from 'react';
import axios from 'axios';
import '../../../App_Task6.css';
import WeatherDataDisplay from './WeatherDataDisplay';
import SearchWeatherButton from './SearchWeatherButton';
import SearchInput from './SearchInput';

function SixthPage() {
  const [weatherData, setWeatherData] = useState(['', '']);
  const [town, setTown] = useState('');
  const getData = function () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=186429c2dc77520abeefc7de9a9c8c15`;
    axios.get(url)
      .then((response) => {
        const geo = Math.round(response.data.main.temp - 273);
        setWeatherData([town, geo]); console.log(response);
      });
  };
  return (
    <div className="weather-wrapper">
      <WeatherDataDisplay weatherData={weatherData} />
      <div className="search-wrapper">
        <SearchWeatherButton getData={() => { getData(); }} />
        <SearchInput getTown={(event) => setTown(event.target.value)} />
      </div>
    </div>
  );
}

export default SixthPage;
