import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createClientApp } from './create-app'

// 如果有 winodw.__INITIAL__STATE__, 就是用 hydrate 挂载
if (window.__INITIAL__STATE__) {
  console.log('hydrate')
 ReactDOM.hydrate(
  createClientApp(),
   document.getElementById('root')
 )
}else {
  ReactDOM.render(
    createClientApp(),
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
