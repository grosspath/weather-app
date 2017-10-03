import React, { Component } from 'react';
import { getWeeklyForecast } from '../components/datafetch';
import ViewHome from './view-home';
import ViewCurrent from './view-current';
import WeeklyForecast from './view-weeklyForecastDay';
import { Link } from 'react-router-dom';

const WeeklyForecastUI = ({weeklyForecastData, lat, lon, zip, code}) => (
  <div>
    {weeklyForecastData.daily.data.map(function (listItem) {
      return <WeeklyForecast key={Math.random()} day={listItem} weeklyForecastData={weeklyForecastData} zip={zip} code={code}/>
    })}
  </div>
);


const ViewWeeklyForecast = ({isLoading, weeklyForecastData, lat, lon, zip, code}) => (

  (isLoading === true) ?
    (<h1 className="loading">Loading</h1>) :
    (
      <span>

        <div className="border container current text-center">

          <ul>
            <li><Link to='/'>&#8249; SEARCH</Link></li>
            <li><span className="forecast-title">FORECAST</span></li>
            <li><Link to={{pathname: '/getCurrent',
                           zip: zip,
                           code: code}}>CURRENT &#8250;</Link></li>
          </ul>


        </div>

        <WeeklyForecastUI weeklyForecastData={weeklyForecastData} zip={zip} code={code} lat={lat} lon={lon}/>
      </span>
    )
);


export default ViewWeeklyForecast;
