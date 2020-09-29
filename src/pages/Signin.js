import React, { useState } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "./../containers/Header";
import { Form } from "./../components";

export default function Signin({ children, ...restProps }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
  };

  const isValid = (password = "", email = "") => {
    return password.trim() === "" || email.trim() === "";
  };
  return (
    <>
      {" "}
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
