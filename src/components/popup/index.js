import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  position: fixed;
  top: 0px;
  height: 100%;
  z-index: 30000;
  left: 0px;
  right: 0px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: 0.3s ease;

  button {
    margin: 1rem;
  }
  video {
    width: 60%;
    @media (max-width: 600px) {
      width: 85%;
    }
  }
`;

export default function Popup({ children, ...props }) {
  return <Container>{children}</Container>;
}
