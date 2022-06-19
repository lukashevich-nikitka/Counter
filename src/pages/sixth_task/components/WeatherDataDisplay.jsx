import React from 'react';

function WeatherDataDisplay(props) {
  const { weatherData } = props;
  if (weatherData !== 'city not found') {
    return (
      <div className="wether-data-wrapper">
        <div>{weatherData}</div>
      </div>
    );
  }
  return (
    <div className="wether-data-wrapper">
      <div>Такого города не существует</div>
    </div>
  );
}

export default WeatherDataDisplay;
