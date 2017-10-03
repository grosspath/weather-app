import React, { Component } from 'react';
import { getWeather } from './datafetch';
import ViewCurrent from '../views/view-current';


class GetCurrent extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,
      currentData: {}
    }
  }

  componentDidMount () {
    this.fetchCurrent(this.props.location.zip, this.props.location.code);
  }

  async fetchCurrent (zip, code) {
    const currentData = await getWeather(zip, code);
    this.setState({
      isLoading: false,
      currentData: currentData
    });
  }

render() {

  return(
    <ViewCurrent
      zip={this.props.location.zip}
      code={this.props.location.code}
      currentData={this.state.currentData}
      isLoading={this.state.isLoading}
    />
    )
  }

};

export default GetCurrent;
