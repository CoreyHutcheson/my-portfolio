import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  height: 90px;
  background: ${props => props.theme.color_primary};
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: ${props => props.theme.color_primaryDark};
  color: ${props => props.theme.font_onPrimary1};
  padding: 0.5rem;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background: ${props => props.theme.color_accent};
    color: ${props => props.theme.font_onAccent1};

    & ${StyledIcon} {
      animation: slideDown 0.1s;

      @keyframes slideDown {
        0% {
          transform: translatex(-100px);
        }
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
  </StyledFooter>
);

export default Footer;
