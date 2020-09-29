import React from "react";

import * as Routes from "./constants/routes";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Signin from "./pages/Signin";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import SignUp from "./pages/Signup";

// import { firebase } from "./lib/firebase.prod";

function App() {
  const user = null;
  return (
    <Switch>
      <Route exact path={Routes.SIGN_IN}>
        <IsUserRedirect
          user={user}
          logPath={Routes.BROWSE}
          path={Routes.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Route>
      <Route exact path={Routes.SIGN_UP}>
        <IsUserRedirect
          user={user}
          logPath={Routes.BROWSE}
          path={Routes.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
      </Route>
      <Route exact path={Routes.BROWSE}>
        <ProtectedRoute user={user} path={Routes.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Route>
      <Route exact path={Routes.HOME} render={() => <Home />} />
      <Route exact render={() => <Redirect to={Routes.HOME} />} />
    </Switch>
  );
}

export default App;
