import React from "react";
import { Inner, Container } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  console.log(direction);
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
