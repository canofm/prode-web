import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Bets from './components/bets';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout(Bets)} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
