import { createGlobalStyle } from "styled-components";

export const fonts = {
  Raleway: "'Raleway', sans-serif",
  Alice: "'Alice', serif",
};

export const colors = {
  bgColor: "#F8F8FF",
  green600: "#066F6F",
  green400: "#117777",
  green200: "#398A87",
  dark600: "#4E4E4E",
  dark400: "#9D9D9F",
  light200: "#F7F7F7",
  light400: "#FCFCFC",
};

export const spacing = {
  space1: "8px",
  space2: "16px",
  space3: "24px",
  space4: "32px",
  space5: "40px",
  space6: "48px",
  space7: "56px",
  space8: "64px",
  space9: "72px",
  space10: "80px",
  space11: "88px",
  space12: "96px",
  space13: "104px",
};

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.Raleway};
           }

           body{
               background-color: ${colors.bgColor};
               min-height: 50vh ;
           }

          

    /* h1,h2,h3,h4,h5 {
               font-family: ${fonts.Raleway};
           }

    p,span,a{
               font-family: ${fonts.Alice};
           } */
`;
