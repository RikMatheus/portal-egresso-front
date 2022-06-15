import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;    
  }
`;

export const theme = {
  colors: {
    primary: "#CC2936",
    secondary: "#ccc",
    tertiary: "#2921AB",
    background: "#fff",
    white: "#fff",
    error: "#E15B5B",
    type: "#333333",
  },

  fonts: {
    exl: "2.75rem",
    xxl: "2rem",
    xl: "1.25rem",
    lg: "1.125rem",
    base: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },

  shadows: {
    sm: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  },
};
