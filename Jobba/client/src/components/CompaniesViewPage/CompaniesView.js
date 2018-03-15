import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCompanyForm from './NewCompanyForm'


class Companies extends Component {
    state = {
        companies: [],
        showNewForm: false
    }
    componentWillMount() {
        this.getAllCompanies()
    }

    getAllCompanies = async () => {
        const res = await axios.get('/api/companies')
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {
        return (
            <div>
                <h1>Companies List</h1>
            {this.state.companies.map(company => (
                <Link key={company.id} to={`/${company._id}`}>
                <h3>Name: {company.name}</h3>
                <p>Description: {company.description}</p>
                </Link>
            
            ))}
            <button onClick={this.toggleShowNewForm}>Create New Company</button>

            {this.state.showNewForm ? <NewCompanyForm getAllCompanies={this.getAllCompanies}/> : null}
            </div>
        );
    }
}

export default Companies;