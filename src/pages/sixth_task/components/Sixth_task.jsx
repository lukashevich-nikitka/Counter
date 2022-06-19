import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/App_Task6.css';
import WeatherDataDisplay from './WeatherDataDisplay';
import SearchWeatherButton from './SearchWeatherButton';
import SearchInput from './SearchInput';

function SixthPage() {
  const [weatherData, setWeatherData] = useState('');
  const [town, setTown] = useState('');
  useEffect(() => { document.title = town; });
  const getData = function () {
    if (town) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=186429c2dc77520abeefc7de9a9c8c15`;
      axios.get(url)
        .then((res) => {
          const geo = Math.round(res.data.main.temp - 273); console.log(res);
          setWeatherData(`Погода в ${town} сейчас: ${geo}°C`);
        }).catch((err) => {
          setWeatherData(err.response.data.message);
        });
    } else {
      setWeatherData('Заполните поле ниже!');
    }
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
