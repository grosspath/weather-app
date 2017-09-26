import React from 'react';
import { Link } from 'react-router-dom';

//Component written in the event i want to add a navbar at some later date
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/current'>Current</Link></li>
        <li><Link to='/forecast'>Forecast</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
