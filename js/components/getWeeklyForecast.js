import React, { Component } from 'react';
import { getWeeklyWeather } from './datafetch';
import ViewWeeklyForecast from '../views/view-weeklyForecast';


class GetWeeklyForecast extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,
      weeklyForecastData: {}
    }
  }

  componentDidMount () {
    this.fetchWeeklyForecast(this.props.location.lat, this.props.location.lon);
  }

  componentWillReceiveProps (nextProps) {
    this.fetchWeeklyForecast(nextProps.location.lat, nextProps.location.lon);
  }

  async fetchWeeklyForecast (lat, lon) {
    const weeklyForecastData = await getWeeklyWeather(lat, lon);
    this.setState({
      isLoading: false,
      weeklyForecastData: weeklyForecastData
    });
  }

render() {

  return(

    <ViewWeeklyForecast
      lat={this.props.location.lat}
      lon={this.props.location.lon}
      weeklyForecastData={this.state.weeklyForecastData}
      isLoading={this.state.isLoading}
      zip={this.props.location.zip}
      code={this.props.location.code}

    />
    )
  }

};

export default GetWeeklyForecast;
