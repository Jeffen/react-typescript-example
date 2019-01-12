import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import { AppHeader, Notifier } from './shared';
import { Info } from './pages/info';
import { Checkout } from './pages/checkout';
import { Result } from './pages/result';
import { Home } from './pages/home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppHeader />
        <Switch>
          <Route exact path='/' render={props => <Home />} />
          <Route exact path='/info' render={props => <Info {...props} />} />
          <Route
            exact
            path='/confirm'
            render={props => <Checkout {...props} />}
          />
          <Route exact path='/result' render={props => <Result {...props} />} />
          <Redirect to='/' />
        </Switch>
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
