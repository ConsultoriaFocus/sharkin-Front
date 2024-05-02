import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { IsAuthenticated } from "../auth/isAuthenticated";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
