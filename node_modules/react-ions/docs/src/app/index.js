// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, IndexRoute } from 'react-router'

// Routes
import Routes from './routes'

ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById('app'))
