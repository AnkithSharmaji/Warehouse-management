import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListingPage from './ListingPage';
import DetailsPage from './DetailsPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListingPage} />
        <Route path="/warehouses/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
