import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import BioView from './components/BioViewPage/BioView'
import CompaniesView from './components/CompaniesViewPage/CompaniesView'
import SingleCompany from './components/CompaniesViewPage/SingleCompany'
import NewCompanyForm from './components/CompaniesViewPage/NewCompanyForm'
import PositionsView from './components/PositionsViewPage/PositionsView'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={NewCompanyForm} />
            <Route path="/companies" component={CompaniesView} />
            <Route path="/positions" component={PositionsView} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;