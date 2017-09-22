import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//Import routing components
import { BrowserRouter, Route } from 'react-router-dom';
//Import my components
import HomeView from './views/view-home';
import ShowWeather from './views/view-show-weather';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomeView} />
      <Route path="/current" component={ShowWeather} city={this.state}/>
    </div>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
