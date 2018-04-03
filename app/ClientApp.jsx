import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';

const renderApp = () => {
  render(<Routes />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}