import React, { useContext } from "react";
import { globalAuth } from "../context/auth";
import { FirebaseContext } from "../context/firebase";
import { Header } from "./../components";
import * as Routes from "./../constants/routes";
import logo from "./../logo.png";

export function HeaderContainer({ children, ...restProps }) {
  const { user } = useContext(globalAuth);
  const { firebase } = useContext(FirebaseContext);
  const click = user
    ? (e) => {
        e.preventDefault();
        firebase.auth().signOut();
      }
    : null;

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} alt="Netflix and trill" src={logo} />
        {user ? (
          <button onClick={click}>Log out</button>
        ) : (
          <Header.Button to={Routes.SIGN_IN}>Sign In</Header.Button>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
