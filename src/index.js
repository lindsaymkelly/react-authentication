import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/WelcomePage';
import UserDashboard from './components/UserDashboard';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={WelcomePage}/>
        <Route path="/special" component={UserDashboard} onEnter={requireAuth}/>
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));

