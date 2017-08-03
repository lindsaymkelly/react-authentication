import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';

export default class WelcomePage extends Component{
  render(){
    return (
      <div className="container">
        <Nav />
        <h1>Welcome!</h1>
        <p>
          My name is Lindsay Kelly and this is my submission for the Konica Minolta Technical Assessment.  To learn more about me and my approach to this challenge, why not login or create an account?
        </p>
        <div className="col-sm-12">
          { isLoggedIn() ? 
          <div className="jumbotron text-center">
            <h2>See More About My Project</h2>
            <Link className="btn btn-lg btn-success" to='/special'> Learn More </Link>
          </div> : <div className="jumbotron text-center"><h2>Create An Account Or Log In To Learn More</h2></div>
          }
        </div>
      </div>
    );
  }
}
