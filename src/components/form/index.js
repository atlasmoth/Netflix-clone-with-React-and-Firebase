import styled from "styled-components/macro";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgb(0, 0, 0, 0.75);
  margin: auto;
  max-width: 450px;
  border-radius: 5px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  box-shadow: 0px 18px 132px -6px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
const Error = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #fff;
  padding: 15px 20px;
`;
const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: 0px;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;
const Submit = styled.button`
  background-color: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 1rem;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Form({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
