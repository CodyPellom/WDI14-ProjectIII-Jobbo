import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import CompaniesView from './components/CompaniesView'
import NewCompanyForm from './components/NewCompanyForm'
import About from './components/About'
import BioView from './components/BioView'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path='/CompaniesView' component={CompaniesView} />
            <Route path='/NewCompanyForm' component={NewCompanyForm} />
            <Route path='/About' component={About} />
            <Route path='/BioView' component={BioView}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;