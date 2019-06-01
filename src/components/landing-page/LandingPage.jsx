import React from "react";
import styled from "styled-components";

import ScrollDownButton from "./scroll-down-button";

const Text = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  max-width: 70%;
  margin-bottom: 2rem;
  color: ${props => props.theme.font_onPrimary1};

  @media (min-width: 600px) {
    font-size: 5rem;
  }
`;

const StyledLandingPage = styled.span`
  height: ${props =>
    `calc(${props.theme.landingPageHeight} - ${props.theme.navbarHeight})`};
  background: ${props => props.theme.color_primaryDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Text>My name is Corey Hutcheson and I'm a web developer!</Text>
      <ScrollDownButton />
    </StyledLandingPage>
  );
};

export default LandingPage;
