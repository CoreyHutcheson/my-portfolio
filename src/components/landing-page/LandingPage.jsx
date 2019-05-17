import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.div`
  height: ${props =>
    `calc(${props.theme.landingPageHeight} - ${props.theme.navbarHeight})`};
  background: ${props => props.theme.color_primaryDark};
`;

const LandingPage = () => <StyledLandingPage />;

export default LandingPage;
