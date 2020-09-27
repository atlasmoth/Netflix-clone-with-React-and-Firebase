import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { AccordionContainer } from "./containers/accordion";
import * as Routes from "./constants/routes";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={Routes.SIGN_IN} />
        <Route exact path={Routes.SIGN_UP} />
        <Route exact render={() => <Redirect to={Routes.HOME} />} />
      </Switch>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

export default App;
