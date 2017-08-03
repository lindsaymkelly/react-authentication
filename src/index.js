import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/WelcomePage';
import UserDashboard from './components/UserDashboard';
import { Router, Route, browserHistory } from 'react-router';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={WelcomePage}/>
        <Route path="/special" component={UserDashboard}/>
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));

