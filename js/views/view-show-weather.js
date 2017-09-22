import React from 'react';

class ShowResults extends React.Component {

  render () {
console.log('what this', this.props);
    let data =  {
    coord: {
    lon: -0.13,
    lat: 51.51
    },
    weather: [
    {
    id: 300,
    main: "Drizzle",
    description: "light intensity drizzle",
    icon: "09d"
    }
    ],
    base: "stations",
    main: {
    temp: 84.2,
    pressure: 1012,
    humidity: 81,
    temp_min: 77.1,
    temp_max: 86.8
    },
    visibility: 10000,
    wind: {
    speed: 4.1,
    deg: 80
    },
    clouds: {
    all: 90
    },
    dt: 1485789600,
    sys: {
    type: 1,
    id: 5091,
    message: 0.0103,
    country: "GB",
    sunrise: 1485762037,
    sunset: 1485794875
    },
    id: 2643743,
    name: "London",
    cod: 200
    }
//
//     $(document).ready(function() {
//       $('#weather-location').click(function() {
//         var city = $('#location').val();
//         $('#location').val("");
//
//         $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//           console.log(response);
//         });
//       });
//     });
// ;
    let main = data.main;
    let weather = data.weather;
    let date = new Date();
    let dayOfWeek = date.toUTCString().slice(0,11);


  return (
<span>
    <div className="border container current text-center">
    <ul>
      <li><a href="#">&#8249; SEARCH</a></li>
      <li><span className="current-title">CURRENT</span></li>
      <li><a href="#">FORECAST &#8250;</a></li>
    </ul>
  </div>

    <div>
      <div className="container">
        <h1 className="city-name">{data.name}</h1>
        <h4 className="date text-center">{dayOfWeek}</h4>

        <img className="icon" src={"http://openweathermap.org/img/w/"+ weather[0].icon + ".png"}/>
        <h1 className="temp">{main.temp}<span>&#176;F</span></h1>
        <h3 className="condition">{weather[0].main}</h3>
      </div>

    </div>

      <div id="showWeather">
        <h3 className="data-results">Humidity: {main.humidity}%</h3>
        <h3 className="data-results">High: {main.temp_max}<span>&#176;</span>F</h3>
        <h3 className="data-results">Low: {main.temp_min}<span>&#176;</span>F</h3>
        <h4 className="data-results">Pressure: {main.pressure}Hpa</h4>
        <h4 className="data-results">Wind Speed: {data.wind.speed}mph</h4>
        <h4 className="data-results">Wind Direction: {data.wind.deg}</h4>

      </div>
      <div className="bottom-border"></div>
    </span>

    )
  }
}

export default ShowResults;
