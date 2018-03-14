import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyle = styled.div`
display: flex;
justify-content: space-around;
padding: 5px;
background: cornflowerblue;
`


class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <h1>Jobba Navigation</h1>
                <ul>
                    <li>
                        <Link to="/">Your Bio</Link>
                    </li>
                    <li>
                        <Link to="/companies">Companies Listing</Link>
                    </li>
                    <li>
                        <Link to="companies/positions">Positions Listing</Link>
                    </li>
                </ul>
            </NavBarStyle>
        );
    }
}

export default NavBar;