import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class WelcomePage extends Component{
  render(){
    return (
    <div className="container">
      <h1>Welcome!</h1>
      <p>
        My name is Lindsay Kelly and this is my submission for the Konica Minolta Technical Assessment.  To learn more about me and my approach to this challenge, why not login or create an account?
      </p>
    </div>
    <div className="col-sm-12">
      <div className="jumbotron text-center">
        <h2>Learn More By Logging In</h2>
      </div>
    </div>

    <div className="col-sm-12">
        <div className="jumbotron text-center">
          <Link className="btn btn-lg btn-success" to='/special'> Learn More </Link>
        </div>
    </div>
    )
  }
}