import React from "react";
import { Container, Input, Button, Text } from "./styles/opt-form";
export default function OptForm({ children, ...restProps }) {
  //
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
