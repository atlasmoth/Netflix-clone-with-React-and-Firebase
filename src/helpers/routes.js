import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, logPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: logPath }} />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user) {
          return children;
        }
        if (!user) {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}
