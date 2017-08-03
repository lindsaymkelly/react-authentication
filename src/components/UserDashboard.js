import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class UserDashboard extends Component{
  render(){
    return (
    <div className="container">
      <Nav />
      <h1 className="text-center">About This Project:</h1>
      <p>
        Part of the appeal of being in the world of technology is the fact that one must always be learning. Even with something like a technical assessment, there is an opportunity to learn and grow. I'm pleased to say that I feel I learned a lot working through this challenge.
      </p>
      <p>
        Before approaching this assessment, I had never built an app using an external widget to help implement user authentication. However, I find that many clients and sites prefer to outsource this particular bit of logic. There is certainly something valuable in not reinventing the wheel or making a problem more complex than it has to be. But working with unfamiliar logic has its own set of challenges.
      </p>
      <p>
        I chose to work with Auth0 because they have <a href="https://auth0.com/docs/quickstart/spa/react">great documentation </a> and plenty of other resources and users to consult. Plus, it was easy to build on top of their logic to create functionality for logging in, logging out, and checking to see whether a session was expired or not. Plus, it would be relatively simple to build on top of this to add extra functionality like two-factor authentication.
      </p>
      <p>
        Any project always has room to improve and grow and there are plenty of things that I think could have gone smoother or will do differently next time. However, I feel proud of what I built and all of the new things that I learned through the process. Regardless of the outcome, I appreciate the opportunity to develop my knowledge.
      </p>  
    </div>
    )
  }
}