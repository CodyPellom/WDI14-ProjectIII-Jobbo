import React, { Component } from 'react';
import styled from 'styled-components'


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
                        <a href="/" conClick={this.props.getBios}>Jobba Home</a>
                    </li>
                    <li>
                        <a href="/bios/new">Create New Bio</a>
                    </li>
                    <li>
                        <a href="/about">About Jobba</a>
                    </li>
                </ul>
            </NavBarStyle>
        );
    }
}

export default NavBar;