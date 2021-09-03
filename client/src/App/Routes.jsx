import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import BaseContainer from 'BaseContainer';
import NotMatch from 'shared/components/NotMatch';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/cities" />
      <Route path="/cities" component={BaseContainer} />
      <Route component={NotMatch} />
    </Switch>
  </Router>
);

export default Routes;