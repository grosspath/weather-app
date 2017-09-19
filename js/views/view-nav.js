import React from 'react';
import Bootstrap from 'bootstrap';
import $ from 'jquery';

class NavView extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" id="nav_bar">
  <div className="container">
    <div className="navbar-header">
      <a href="#" className="navbar-brand navbar-link weather">
        <img src="images/logo.png" className="img-responsive" id="logo" alt=""/> <strong>Weather App</strong>
      </a>
      <button className="navbar-toggle collapsed" data-toggle="collapse"
        data-target="nav-col">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
    </div>
    <div className="collapse navbar-collapse" id="navcol">
      <ul className="nav navbar-nav navbar-right" id="nav-list">
        <li><a href="current.html">Current</a></li>
        <li><a href="forecast.html">Forecast</a></li>
        <li><a href="http://openweathermap.org" target="_blank">Open Weather</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default NavView;
