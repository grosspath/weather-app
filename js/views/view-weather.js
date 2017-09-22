import React from 'react';
import ShowResults from './view-show-weather';
import NavView from './view-nav';


class WeatherData extends React.Component {

  constructor(props) {
    super(props)

      this.state = {
        data: []
      }
    }

  // componentDidMount() {
  //   $.get("http://api.openweathermap.org/data/2.5/weather?q=Charleston,us&APPID=5a0a6375811682ebe5a52b25954cbcf6",
  //         function(response) {
  //             this.setState({
  //               data : response
  //             });
  //         }.bind(this))
  //     }


    render() {
      let test = {
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




      return (
        <div>
        
          <ShowResults data={test}/>

        </div>
      )

    }

}

export default WeatherData;
