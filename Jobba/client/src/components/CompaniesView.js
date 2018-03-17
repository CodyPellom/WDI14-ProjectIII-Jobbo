import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCompanyForm from './NewCompanyForm'
import styled from 'styled-components'

class Companies extends Component {




    addCompany(event) {
        event.preventDefault();
        let name = this.refs.name.value
        let name2 = this.refs.name.value
        let name3 = this.refs.name.value
        let completed = this.refs.completed.value
        let counter = this.state.counter;
        
        let Company = {
            name,
            name2,
            name3,
            completed,
            counter
        }
        counter +=2;

        let Companies = this.state.Companies

        Companies.push(Company)

        this.setState({
            Companies:Companies,
            counter:counter
        })

        this.refs.CompanyForm.reset()

        console.log(this.refs)
    }

    constructor() {
        super()
        
    this.addCompany = this.addCompany.bind(this)
    
        this.state={
    Companies: [],
    counter: 0

        }
    }

    render() {
        let Companies = this.state.Companies;
        return (
            <div>
                <h1>Companies List</h1>
                <form ref="CompanyForm">
                <input type="text" ref="name" placeholder="add company name here"/>
                <br/>
                <input type="text" ref="name2" placeholder="add date applied here"/>
                <br/>
                <input type="text" ref="name3" placeholder="add note here"/>
                <br/>
                <input type="text" ref="completed" placeholder="add location here"/>
                <button onClick={this.addCompany}>Add a Company</button>
                
                </form>
                <ul>
                    {Companies.map((Company => <li key={Company.counter} >{Company.name}</li> ))}
                </ul>
            </div>
        );
    }
}

export default Companies;