import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Redirect to="/" from="*" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
