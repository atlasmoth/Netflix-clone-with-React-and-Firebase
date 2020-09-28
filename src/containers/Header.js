import React from "react";
import { Header } from "./../components";
import * as Routes from "./../constants/routes";
import logo from "./../logo.png";

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} alt="Netflix and trill" src={logo} />
        <Header.Button to={Routes.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
