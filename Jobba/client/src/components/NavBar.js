import React, { Component } from 'react';
import CompaniesView from './CompaniesView'
import BioView from './BioView'
import NewCompanyForm from './NewCompanyForm';
import About from './About'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyle = styled.div`
display: flex;
justify-content: space-around;
padding: 5px;
background: Black;
a, h1 {
    color:white;
}
`


class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <h1>Jobba Navigation</h1>
                <ul>
                   
                    <li>
                        <a href="/BioView" onClick={BioView}>Create a Bio</a>
                    </li>
                    <li>
                        <a href="/CompaniesView" onClick={CompaniesView}>Create a Company</a>
                    </li>
                    <li>
                        <a href="/About" onClick={About}>About Jobba</a>
                    </li>
                </ul>
            </NavBarStyle>
        );
    }
}

export default NavBar;