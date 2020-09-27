import React from "react";
import { Header } from "./../components";
import * as Routes from "./../constants/routes";

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={Routes.HOME}
          alt="Netflix and trill"
          src={Routes.HOME}
        />
        <Header.Button to={Routes.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
    </Header>
  );
}
