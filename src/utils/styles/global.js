import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700|Rubik:400,700&display=swap");

  body {
    font-family: "Karla", sans-serif;
    color: ${props => props.theme.font_Primary};

    &.ReactModal__Body--open {
      overflow: hidden;
    }
  }

  html,
  body,
  #___gatsby {
    min-height: 100vh;
  }

  #___gatsby > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default GlobalStyle;
