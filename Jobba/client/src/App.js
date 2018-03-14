import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import BioView from './components/BioViewPage/BioView'
import CompaniesView from './components/CompaniesViewPage/CompaniesView'
import PositionsView from './components/PositionsViewPage'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>


            <Route exact path="/" component={BioView} />
            <Route path="/companies" component={CompaniesView} />
            <Route path="/companies/positions" component={PositionsView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;