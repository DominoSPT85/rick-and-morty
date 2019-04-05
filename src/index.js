import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';
import './index.css';
import HomePage from './HomePage';
import { Router } from '@reach/router';
import FavePage from './FavePage';

ReactDOM.render(
  <StoreProvider>
    <App path='/'>
      <HomePage path='/' />
      <FavePage path='/faves' />
    </App>
  </StoreProvider>,
  document.getElementById('root')
  );

