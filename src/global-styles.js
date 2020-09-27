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
`;
