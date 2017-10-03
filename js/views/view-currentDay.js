import React from 'react';

const CurrentDay = ({currentData, zip, code}) => {

  let main = currentData.main;
  let wind = currentData.wind;
  let weather = currentData.weather[0];
  let name = currentData.name;
  let temp = Math.round(main.temp);
  let high = Math.round(main.temp_max);
  let low = Math.round(main.temp_min);
  let date = new Date();
  let dayOfWeek = date.toDateString();

  return (

    <span>

      <div className="currentPage">

        <div>
          <div>
            <h1 className="city-name">{name}</h1>
            <h4 className="date text-center">{dayOfWeek}</h4>
            <img className="icon" src={"http://openweathermap.org/img/w/"+ weather.icon + ".png"}/>
            <h1 className="temp">{temp}<span>&#176;F</span></h1>
            <h3 className="condition">{weather.main}</h3>
          </div>
        </div>

        <div id="showWeather">
          <h3 className="data-results">Humidity: {main.humidity}%</h3>
          <h3 className="data-results">High: {high}<span>&#176;</span>F</h3>
          <h3 className="data-results">Low: {low}<span>&#176;</span>F</h3>
          <h4 className="data-results">Pressure: {main.pressure}Hpa</h4>
          <h4 className="data-results">Wind Speed: {wind.speed}mph</h4>
          <h4 className="data-results">Wind Direction: {wind.deg} &#176;</h4>
        </div>

        <div className="bottom-border"></div>

      </div>

    </span>

  )
};

export default CurrentDay;
