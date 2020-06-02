import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

