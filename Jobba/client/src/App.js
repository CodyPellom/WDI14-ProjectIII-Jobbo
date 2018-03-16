import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'


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
      this.setState({positions:positions})
    })
    .catch(err => {
      console.log(err)
    });
  };

  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>


          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;