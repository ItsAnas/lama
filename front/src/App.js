import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router'
import Routes from './Routes'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <Router >
        <Switch>
          <Routes />
        </Switch>
      </Router>
    )
  }
}

export default App;
