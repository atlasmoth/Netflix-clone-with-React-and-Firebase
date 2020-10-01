import React, { useEffect, useReducer, useContext } from "react";

import * as Routes from "./constants/routes";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Signin from "./pages/Signin";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import SignUp from "./pages/Signup";
import { globalAuth } from "./context/auth";
import { FirebaseContext } from "./context/firebase";

// import { firebase } from "./lib/firebase.prod";
function reducer(state, action) {
  switch (action.type) {
    case "auth": {
      return { ...state, user: action.user };
    }
    default: {
      return { ...state };
    }
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { user: null });
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      dispatch({ type: "auth", user: authUser });
    });
    return () => listener();
  }, [firebase]);

  return (
    <globalAuth.Provider value={{ user: state.user, dispatch }}>
      <Switch>
        <Route exact path={Routes.SIGN_IN}>
          <IsUserRedirect
            user={state.user}
            logPath={Routes.BROWSE}
            path={Routes.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
        </Route>
        <Route exact path={Routes.SIGN_UP}>
          <IsUserRedirect
            user={state.user}
            logPath={Routes.BROWSE}
            path={Routes.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>
        </Route>
        <Route exact path={Routes.BROWSE}>
          <ProtectedRoute user={state.user} path={Routes.BROWSE}>
            <Browse />
          </ProtectedRoute>
        </Route>
        <Route exact path={Routes.HOME} render={() => <Home />} />
        <Route exact render={() => <Redirect to={Routes.HOME} />} />
      </Switch>
    </globalAuth.Provider>
  );
}

export default App;
