import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Background = styled.div``;

export const Logo = styled.img``;

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
