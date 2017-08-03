import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class AboutLindsay extends Component{
  render(){
    return (
    <div className="container">
      <Nav />
      <h1 className="text-center">About Lindsay:</h1>
      <p className="text-center">Hello! I'm Lindsay, and I'm looking for opportunities to collaborate, contribute, and continue learning as much as I can. Here are some ways you can get to know me better:</p>
      <ul className="text-center list-unstyled">
        <li><a href="https://github.com/lindsaymkelly">GitHub </a></li>
        <li><a href="https://www.linkedin.com/in/lindsaymkelly/">LinkedIn</a></li>
        <li><a href="https://resume.creddle.io/resume/39gtflpj9qu">Resume</a></li>
      </ul>
    </div>
    )
  }
}