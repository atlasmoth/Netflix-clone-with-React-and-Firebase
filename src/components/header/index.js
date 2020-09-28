import React from "react";
import { Container, Background, Logo, Button } from "./styles/header";
import { Link } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <>children</>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ src, to, ...restProps }) {
  return (
    <Link to={`${to}`}>
      <Logo {...restProps} alt="alt" src={src} />
    </Link>
  );
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return <Button to={to}>{children}</Button>;
};
