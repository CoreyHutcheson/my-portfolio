import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.div`
  height: calc(
    ${props => props.theme.landingPageHeight} -
      ${props => props.theme.navbarHeight}
  );
  background: ${props => props.theme.color_primaryDark};
`;

const LandingPage = () => <StyledLandingPage />;

export default LandingPage;
