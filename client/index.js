import React from 'react';

import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';
import './style.scss';
import './styles/output.css';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
