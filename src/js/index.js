import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pillarsApp from './reducers'
import App from './components/App'

let store = createStore(pillarsApp, {},
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
