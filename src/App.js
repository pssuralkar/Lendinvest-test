import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import LoanList from './Components/LoanList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loans: []
    };
  }

  componentDidMount() {
    axios.get('./Data/current-loans.json')
      .then(response => {
        this.setState({
          loans: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Current Loans</h1>
          </div>
        </div>
        <div className="main-content">
          <LoanList data={this.state.loans} />
        </div>
      </div>
    );
  }
}
