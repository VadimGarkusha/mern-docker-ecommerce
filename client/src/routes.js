import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Store from './pages/Store';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => App(Store)} />
      <Route path="/login" component={() => App(Login)} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);
