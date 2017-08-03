import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Konica Minolta Assessment</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {
              ( isLoggedIn() ) ? <Link to="/special">Dashboard</Link> : ''
            }

          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {
              ( isLoggedIn () ) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log Out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
            }
          </li>
        </ul>
      </nav>
    );
  }
}
