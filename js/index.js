import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import Main from './routes/main';

//The application starts here, establishes the browser router and calls main
//as the first component
render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  ),
  document.getElementById('root')
);
