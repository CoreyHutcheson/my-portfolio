import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,600");

  body {
    font-family: "Raleway";
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
