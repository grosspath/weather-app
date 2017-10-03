import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewHome from '../views/view-home';
import GetCurrent from '../components/getCurrent';
import GetWeeklyForecast from '../components/getWeeklyForecast';

//This component sets up the routes for current, home and forecast components
const Main = () => (
  //playing around with some es6
  <div>
    <Switch>
      <Route exact path='/' component={ViewHome}/>
      <Route path='/getCurrent' component={GetCurrent}/>
      <Route path='/getWeeklyForecast' component={GetWeeklyForecast}/>
    </Switch>
  </div>
)

export default Main;
