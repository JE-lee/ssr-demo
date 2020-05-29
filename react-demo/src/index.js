import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './index.css';

import routes from './routes/index'
import { store } from './store/index'
import * as serviceWorker from './serviceWorker';

import App from './App.jsx'

store.subscribe(() => {
  console.log('state', store.getState())
})

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <React.StrictMode>
        <App>
          { renderRoutes(routes) }
        </App>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
