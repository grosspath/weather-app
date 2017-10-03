import React, { Component } from 'react';
import { getForecast } from '../components/datafetch';
import ViewHome from './view-home';
import ViewCurrent from './view-current';
import ForecastDay from './view-forecastDay';
import { Link } from 'react-router-dom';

const ForecastUI = ({forecastData, zip, code}) => (
  <div>
    {forecastData.list.map(function (listItem) {
      return <ForecastDay key={listItem.dt} id={listItem.dt} day={listItem} forecastData={forecastData} zip={zip} code={code}/>
    })}
  </div>
);


const ViewForecast = ({isLoading, forecastData, zip, code}) => (

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

        <ForecastUI forecastData={forecastData} zip={zip} code={code} />
      </span>
    )
);


export default ViewForecast;
