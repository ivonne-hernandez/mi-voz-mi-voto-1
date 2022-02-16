import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import App from './App';
import './index.css';

ReactDOM.render (
  <Wrapper>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Wrapper>,
  document.getElementById('root')
);
