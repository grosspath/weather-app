import React from 'react';
import { Link } from 'react-router-dom';

const ForecastDay  = ({day, zip, code, forecastData}) => {

  let icon = day.weather[0].icon;
  let high = day.main.temp;
  let condition = day.weather[0].description;

  return (

    <div className="container box">
      <h1>{high}</h1>
      <img src={'http://openweathermap.org/img/w/' + icon + '.png'} alt='Weather' className="icon"/>
      <h1>{condition}</h1>
    </div>

  )
};

export default ForecastDay;
