import React from "react";
import LandingPage from "../landing.page";
import Archive from "../archive";

import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/archive" component={Archive} />
  </Switch>
);

export default Routes;
