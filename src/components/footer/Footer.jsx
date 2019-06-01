import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import scrollTo from "src/utils/js/scrollTo";

const StyledFooter = styled.footer`
  height: 90px;
  background: ${props => props.theme.color_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconContainer = styled.div`
  max-width: 40%;
  width: 40%;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled(FontAwesomeIcon)``;

const Link = styled.a`
  color: ${props => props.theme.font_onPrimary1};
  padding: 0.5rem;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    color: ${props => props.theme.font_onAccent1};

    & ${StyledIcon} {
      color: ${props => props.theme.color_accent};
      transform: scale(1.1);
    }
  }
`;

const UpButton = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.color_primaryDark};
  color: ${props => props.theme.font_onPrimary1};
  position: absolute;
  top: 0;
  left: 90%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover > svg {
    animation: wiggle 0.5s infinite;

    @keyframes wiggle {
      0% {
        transform: translatey(10%);
      }
      100% {
        transform: translatey(-10%);
      }
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <IconContainer>
      <Link href="#0">
        <StyledIcon icon={faGithub} size="3x" />
      </Link>

      <Link href="#0">
        <StyledIcon icon={faFacebook} size="3x" />
      </Link>

      <Link href="#0">
        <StyledIcon icon={faCodepen} size="3x" />
      </Link>
    </IconContainer>

    <UpButton onClick={() => scrollTo(0)}>
      <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
    </UpButton>
  </StyledFooter>
);

export default Footer;
