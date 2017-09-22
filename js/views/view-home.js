import React, { Component } from 'react';
import { Redirect } from 'react-router';



class HomeView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
      countryCode: '',
      fireRedirect: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onFormSubmit(evt) {
    evt.preventDefault()
    this.setState({fireRedirect: true})

  };

  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value});
  };

  render() {

    const { fireRedirect } = this.state

    return (

      <div id="home" className="container">
        <h1 className="title">GET YOUR LOCAL WEATHER</h1>
        <div>
          <form className="input">
            <input className="input-field" type="text" placeholder="zipcode" name="zipCode" value={this.state.name}
              onChange={(evt) => this.handleChange(evt)}/>
            <input className="input-field" type="text" placeholder="country code (ex. us)" name="countryCode" value={this.state.name}
              onChange={(evt) => this.handleChange(evt)}/>
          </form>
          <div className="center-block">
            <button onClick={this.onFormSubmit} className="button">Get Weather</button>
          </div>
          {fireRedirect && (
            <Redirect to={'/current'} city={this.state}/>
          )}
        </div>
      </div>
    )
  }
}

export default HomeView;
