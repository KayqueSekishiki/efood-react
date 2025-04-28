import { createGlobalStyle } from "styled-components";

export const cores = {
  white: "#FFFFFF",
  sugarMilk: "#FFF8F2",
  flowerBed: "#FFEBD9",
  pureHearted: "#E66767",
};

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
list-style: none;


body {
background-color: ${cores.sugarMilk};
color: ${cores.pureHearted};
padding-top: 2.5rem;
}

.container {
 display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
