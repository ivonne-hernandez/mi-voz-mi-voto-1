import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Spanish from './Languages/es.json';
import English from './Languages/en.json';

const local = navigator.language;

let language;

if (local === "en") {
  language = English;
} else {
  language = Spanish;
}

ReactDOM.render (
  <IntlProvider locale={local} messages={Spanish}>
     <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);