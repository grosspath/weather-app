import React from 'react';
import { Link } from 'react-router-dom';
import BuildIcon from '../components/build-icon';
import { getDateString } from '../components/datafetch';

const WeeklyForecast  = ({day, zip, code, weeklyForecastData}) => {

  let icon = day.icon.toString();
  let high = Math.round(day.temperatureMax);
  let low = Math.round(day.temperatureMin);
  let summary = day.summary;
  let date = getDateString(day.time);

  return (

    <div className="container box">

      <h1>{date}</h1>
      <h1>{high} / {low}</h1>
      <h3>{icon}</h3>
      <BuildIcon icon={icon} />
      <h3>{summary}</h3>

    </div>

  )
};

export default WeeklyForecast;
