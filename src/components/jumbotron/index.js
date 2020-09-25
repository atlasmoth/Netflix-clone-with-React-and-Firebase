import React from "react";
import { Inner, Container } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Panel = function ({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>;
};
Jumbotron.Image = function ({ children, ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
