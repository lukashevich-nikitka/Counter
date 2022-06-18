import React from 'react';

function WeatherDataDisplay(props) {
  const { weatherData } = props;
  return (
    <div className="wether-data-wrapper">
      <div>{`Current weather in ${weatherData[0]}: ${weatherData[1]}`}</div>
    </div>
  );
}

export default WeatherDataDisplay;
