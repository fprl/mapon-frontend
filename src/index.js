import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Reset from './styles/Reset'
import GlobalStyles from './styles/GlobalStyles'
import Fonts from './styles/Fonts'

ReactDOM.render(
  <>
    <Fonts />
    <Reset />
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
