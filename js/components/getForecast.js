import React, { Component } from 'react';
import { getFiveDayForecast } from './datafetch';
import ViewForecast from '../views/view-forecast';


class GetForecast extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }

  componentDidMount () {
    this.fetchForecast(this.props.location.zip, this.props.location.code);
  }

  componentWillReceiveProps (nextProps) {
    this.fetchForecast(nextProps.location.zip, nextProps.location.code);
  }

  async fetchForecast (zip, code) {
    const forecastData = await getFiveDayForecast(zip, code);
    this.setState({
      isLoading: false,
      forecastData: forecastData
    });
  }

render() {

  return(
    <ViewForecast
      zip={this.props.location.zip}
      code={this.props.location.code}
      forecastData={this.state.forecastData}
      isLoading={this.state.isLoading}

    />
    )
  }

};

export default GetForecast;
