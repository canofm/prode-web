import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
    </Switch>
  </BrowserRouter>
)

export default Routes;