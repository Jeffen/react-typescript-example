import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppHeader, Notifier } from './shared';

const Info = lazy(() => import('./pages/info/info'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const Result = lazy(() => import('./pages/result/result'));
const Home = lazy(() => import('./pages/home/home'));

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppHeader />
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' render={props => <Home />} />
            <Route exact path='/info' render={props => <Info {...props} />} />
            <Route
              exact
              path='/confirm'
              render={props => <Checkout {...props} />}
            />
            <Route
              exact
              path='/result'
              render={props => <Result {...props} />}
            />
            <Redirect to='/' />
          </Switch>
        </Suspense>
        <Link to='/'>Home</Link>
        <Link to='/info'>info</Link>
        <Link to='/confirm'>Checkout</Link>
        <Link to='/result'>result</Link>
        <Notifier />
      </div>
    );
  }
}

export default App;
