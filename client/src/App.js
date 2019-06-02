import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Store from './pages/Store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';


export default () => {
  const componentWrapper = Component => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  )

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => componentWrapper(Store)} />
        <Route path="/login" component={() => componentWrapper(Login)} />
        <Route path="/signup" component={() => componentWrapper(SignUp)} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
}
