import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import bio from './components/bio'
import companies from './components/companies'
import positions from './components/positions'



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>

        </Switch>
        <Route exact path="/" component={Bio}/>
        <Route path="/:id" component={Companies}/>
        <Route path="/"
      </div>
      </Router>
    );
  }
}

export default App;