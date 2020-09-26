import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  padding: 0.8rem 1.2rem;
  line-height: normal;
  background-colot: #303030;
  white-space : pre-wrap:
  user-select : none;
  transition : height .25 cubic-bezier(.5,0,.1,1);

  @media (max-width : 600px){
    font-size : 16px;
    line-height : 22px
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
  font-size: 20px;
  background-color: #303030;
  padding: 0.8rem 1.2rem;
  margin-bottom: 1px;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0px;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;
  max-width: 670px;
  &:first-of-type {
    margin-top: 3rem;
  }
`;
