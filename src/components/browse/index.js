import React from "react";
import styled from "styled-components/macro";

const List = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 50px 70px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
  }
`;

const Card = styled.div`
  flex-basis: clamp(250px, 23rem, 350px);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 350px;
  border-radius: 1rem;
  background-color: #17141d;
  box-shadow: -1rem 0 3rem rgba(0, 0, 0, 1);
  padding: 1.5rem;
  transition: 0.3s ease;
  margin-left: -10rem;

  &:hover {
    transform: translateY(-1.5rem);
  }
  &:hover ~ & {
    transform: translateX(10rem);
  }

  h2:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Container = styled.div``;

export default function Browse({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Browse.BrowseList = function BrowseList({ children, ...restProps }) {
  return <List>{children}</List>;
};

Browse.BrowseCard = function BrowseCard({ children, ...restProps }) {
  return <Card>{children}</Card>;
};
