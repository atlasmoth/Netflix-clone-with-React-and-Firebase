import React, { useContext, useState } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "./../containers/Header";
import { Form } from "./../components";
import { FirebaseContext } from "./../context/firebase";
import * as Routes from "./../constants/routes";
import { useHistory } from "react-router-dom";

export default function SignUp({ children, ...restProps }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(Routes.BROWSE);
      })
      .catch((e) => {
        setEmail("");
        setPassword("");
        setError(e.message);
      });
  };

  const isValid = (password = "", email = "") => {
    return password.trim() === "" || email.trim() === "";
  };
  return (
    <>
      {" "}
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            ></Form.Input>

            <Form.Input
              placeholder="Password"
              autoComplete="off"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>

            <Form.Submit disabled={isValid(password, email)} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a Member? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
