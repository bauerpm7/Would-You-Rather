import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware'


const store = createStore( reducer, middleware )

ReactDOM.render(
  <Provider store = { store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
