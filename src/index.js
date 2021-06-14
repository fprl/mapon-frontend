import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Reset from './components/styled/Reset'
import GlobalStyles from './components/styled/GlobalStyles'

ReactDOM.render(
  <>
    <Reset />
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
