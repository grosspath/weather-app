// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

import React, { Component } from 'react';
import ViewHome from './view-home';
import { Link } from 'react-router-dom';

const apiKey = '5a0a6375811682ebe5a52b25954cbcf6';

class ViewCurrent extends React.Component {
  //initialize state
  constructor() {
    super();

    this.state = {
      info: {
        "coord":
      {
        "lon":-80.18,
        "lat":32.98
      },
      "weather":
      [
        {
          "id":802,
          "main":"Clouds",
          "description":"scattered clouds",
          "icon":"03d"
        }
      ],
      "base":"stations",
      "main":
      {
        "temp":80.01,
        "pressure":1013,
        "humidity":65,
        "temp_min":77,
        "temp_max":82.4
      },
      "visibility":16093,
      "wind":
      {
        "speed":9.17,
        "deg":20
      },
      "clouds":
      {
        "all":40
      },
      "dt":1506362100,
      "sys":
      {
        "type":1,
        "id":2437,
        "message":0.0044,
        "country":"US",
        "sunrise":1506337893,
        "sunset":1506381116
      },
      "id":0,
      "name":"Summerville",
      "cod":200
    }
    }
  }

  // componentWillMount(){
  //   fetch('http://api.openweathermap.org/data/2.5/weather?zip='+this.props.location.state.zipCode+','+this.props.location.state.countryCode+'&units=imperial&appid='+apiKey)
  //   .then(results => {
  //     return results.json();
  //   }).then(results => {
  //     this.setState({info:results});
  //   })
  // }
      render () {

        let main = this.state.info.main;
        let wind = this.state.info.wind;
        let weather = this.state.info.weather[0];
        let name = this.state.info.name;
        let date = new Date();
        let dayOfWeek = date.toDateString();

        return (


          <span>

            <div className="border container current text-center">
              <ul>
                <li><Link to='/'>&#8249; SEARCH</Link></li>
                <li><span className="current-title">CURRENT</span></li>
                <li><Link to='/forecast'>FORECAST &#8250;</Link></li>
              </ul>
            </div>

            <div>
              <div className="container">
                <h1 className="city-name">{name}</h1>
                <h4 className="date text-center">{dayOfWeek}</h4>
                <img className="icon" src={"http://openweathermap.org/img/w/"+ weather.icon + ".png"}/>
                <h1 className="temp">{main.temp}<span>&#176;F</span></h1>
                <h3 className="condition">{weather.main}</h3>
              </div>
            </div>

            <div id="showWeather">
              <h3 className="data-results">Humidity: {main.humidity}%</h3>
              <h3 className="data-results">High: {main.temp_max}<span>&#176;</span>F</h3>
              <h3 className="data-results">Low: {main.temp_min}<span>&#176;</span>F</h3>
              <h4 className="data-results">Pressure: {main.pressure}Hpa</h4>
              <h4 className="data-results">Wind Speed: {wind.speed}mph</h4>
              <h4 className="data-results">Wind Direction: {wind.deg}</h4>
            </div>

            <div className="bottom-border"></div>

          </span>

        )
      }
    }


export default ViewCurrent;
