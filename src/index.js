import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';
import './index.css';
import HomePage from './HomePage';
import { Router } from '@reach/router';

ReactDOM.render(
  <StoreProvider>
    <App path='/'>
      <HomePage path='/' />
    </App>
  </StoreProvider>,
  document.getElementById('root')
  );

