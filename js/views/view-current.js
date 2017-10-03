import React, { Component } from 'react';
import ViewHome from './view-home';
import ViewForecast from './view-forecast';
import { getCurrent } from  '../components/getCurrent';
import CurrentDay from './view-currentDay';
import { Link } from 'react-router-dom';


const ViewCurrent = ({isLoading, currentData, zip, code}) => (

  (isLoading === true) ?
  (<h1 className="loading">Loading</h1>) :
  (
    <span>

      <div className="border current text-center">
        <ul>
          <li><Link to='/'>&#8249; SEARCH</Link></li>
          <li><span className="current-title">CURRENT</span></li>
          <li><Link to={{pathname: '/getWeeklyForecast',
                        lat: currentData.coord.lat,
                        lon: currentData.coord.lon,
                        zip: zip,
                        code: code
                        }}>FORECAST &#8250;</Link></li>
        </ul>
      </div>

      <CurrentDay currentData={currentData} zip={zip} code={code} currentData={currentData} />

    </span>

  )
)

export default ViewCurrent;
