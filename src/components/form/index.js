import styled from "styled-components/macro";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h2``;
const Error = styled.div``;
const Base = styled.form``;
const Input = styled.div``;
const Submit = styled.button``;
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

Form.Link = function FormLink({ to, children, ...restProps }) {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};
