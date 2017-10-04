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

    <div className="cube">

      <h1 className="box-date">{date}</h1>
      <h1 className="box-high">H{high} / L{low}</h1>
      <h3 className="box-icon">{icon}</h3>
      <BuildIcon icon={icon} />
      <h3 className="box-summary">{summary}</h3>
      <h5><a href="https://darksy.net/poweredby/">Powered by Dark Sky</a></h5>

    </div>

  )
};

export default WeeklyForecast;
