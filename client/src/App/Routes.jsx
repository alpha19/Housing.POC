import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import BaseContainer from 'BaseContainer';
import ErrorPage from 'shared/components/ErrorPage';
import About from 'About'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/cities" />
      <Route path="/cities" component={BaseContainer} />
      <Route path="/about" component={About} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;