import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class UserDashboard extends Component{
  render(){
    return (
    <div className="container">
      <Nav />
      <h1>User Dashboard</h1>
      <p>
        Insert explanation to approach here
      </p>
    </div>
    )
  }
}