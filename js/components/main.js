import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewHome from './view-home';
import ViewCurrent from './view-current';

//This component sets up the routes for current, home and forecast components
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ViewHome}/>
      <Route path='/current' component={ViewCurrent}/>
      {/* <Route path='/forecast' component={ViewForecast}/> */}
    </Switch>
  </main>
)

export default Main
