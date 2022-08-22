import styled,{ createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/beach.png";

export const GlobalStyle = createGlobalStyle `
 * {
   font-family: 'Rubik', sans-serif;
   box-sizing: border-box;
   margin: 0;
   padding: 0 20px;
 }

 html {
   height: 100%;
 }

 body {
   background-image: url(${BackgroundImage});
   background-size: cover;
   display: flex;
   justify-content: center;
 }
`;

export const Wrapper = styled.div `
 display: flex;
 flex-direction: column;
 align-items: center;

 > p {
   color: #fff;
 }

 h1 {
   background-image:linear-gradient(180deg, #fff, #87f1ff);
   background-size: 100%;
   background-clip: text;
   font-weight: 400;
   filter: drop-shadow(2px 2px #0085a3);
   font-size: 70px;
   margin: 0.8rem;
   text-align: center;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   -moz-background-clip: text;
   -moz-text-fill-color: transparent;
 }

 .score {
   font-size: 2rem;
   margin: 0;
 }

 .start, .next {
   cursor: pointer;
   background: linear-gradient(180deg, #ffffff, #ffcc91);
   border: 2px solid #d38558;
   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   height: 40px;
   margin: 20px 0;
   padding: 0 40px;
 }
 
 .start:hover, .next:hover {
   opacity: 0.8;
 }

 .start {
   max-width: 200px;
 }
`