import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Bios from './components/Bios'
import BiosList from './components/BiosList'
import CompaniesList from './components/CompaniesList'
import PositionsList from './components/PositionsList'
import About from './components/About'
import NewBio from './components/NewBio'
import NewCompany from './components/NewCompany'
import NewPositions from './components/NewPosition'
import HomeView from './components/HomeView'
import axios from 'axios'
import Companies from './components/Companies'
import Positions from './components/Positions'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    name: "",
    experience: "",
    location: "",
    jobs_held: [],

  };

  componentDidMount() {
    this.getBios();
    this.getCompanies();
    this.getPositions();
  }

  getBios = () => {
    axios
      .get("/api/bios")
      .then(res => {
        const bios = res.data;
        this.setState({ bios: bios });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getCompanies = () => {
    axios.get("/api/companies")
      .then(res => {
        const companies = res.data;
        this.setState({ companies: companies })

      })
      .catch(err => {
        console.log(err);
      });
  };

  getPositions = () => {
    axios.get("/api/positions")
      .then(res => {
        const positions = res.data;
        this.setState({ positions: positions })
      })
      .catch(err => {
        console.log(err)
      });
  };


  render() {
    const HomeWrapper = props => {
      return (
        <HomeView
          bios={this.state.bios}
          companies={this.state.companies}
          positions={this.state.positions}
          {...props}
        />
      )
    }

    const BiosWrapper = props => {
      return <Bios {...props} getBios={this.getBios} />
    };

    const CompaniesWrapper = props => {
      return <Companies {...props} getCompanies={this.getCompanies} />
    }

    const PositionsWrapper = props => {
      return <Positions {...props} getPositions={this.getPositions} />

    }
    return (
      <div>
        <Router>
          <NavBar getBios={this.getBios}/>
          <Switch>
          <Route exact path="/" render={HomeWrapper}/>
          <Route exact path="/bios/new" component={NewBio} />
          <Route exact path="/bios/:biosId" render={BiosWrapper}/>
          <Route exact path="/companies/:companiesId" render={CompaniesWrapper}/>
          <Route exact path="/positions/:positionsId" render={PositionsWrapper}/>
          <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    )
  }
   
    
}


export default App;