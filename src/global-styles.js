import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  box-sizing: border-box;
}
 html, body{
   font-family : "segoe ui","sans-serif";
   font-smoothing : antialiased;
   background-color : black;
  color : #333;
  font-size : 16px;
 }
 button{
  background-color: #e50914;
  border: 0px;
  font-size: 15px;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;
  cursor : pointer;

  &:hover {
    background-color: #f40612;
    
  }
 }
`;
