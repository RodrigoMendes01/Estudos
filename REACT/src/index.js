import React from 'react';
import ReactDOM from 'react-dom';

// Components

import GlobalStyle from './styles/global.js';
import App from './components/App/App.js';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
