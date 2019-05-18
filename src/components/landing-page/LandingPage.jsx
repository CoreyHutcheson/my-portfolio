import React from "react";
import styled from "styled-components";

import ScrollDownButton from "./scroll-down-button";

const StyledLandingPage = styled.div`
  height: ${props =>
    `calc(${props.theme.landingPageHeight} - ${props.theme.navbarHeight})`};
  background: ${props => props.theme.color_primaryDark};
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <ScrollDownButton />
    </StyledLandingPage>
  );
};

export default LandingPage;
