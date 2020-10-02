import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Button = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  border: 0px;
  font-size: 15px;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: #f40612;
  }
`;

export const Logout = styled.button`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  border: 0px;
  font-size: 15px;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: #f40612;
  }
`;
