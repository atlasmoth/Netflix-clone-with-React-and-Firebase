import React from "react";

import * as Routes from "./constants/routes";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import Signin from "./pages/Signin";

function App() {
  return (
    <Switch>
      <Route exact path={Routes.SIGN_IN} component={Signin} />
      <Route exact path={Routes.SIGN_UP} component={Signup} />
      <Route exact path={Routes.BROWSE} component={Browse} />
      <Route exact path={Routes.HOME} render={() => <Home />} />
      <Route exact render={() => <Redirect to={Routes.HOME} />} />
    </Switch>
  );
}

export default App;
