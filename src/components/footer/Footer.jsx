import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import { footerLinks } from "src/data/footerLinks.js";
import { scrollTo } from "src/utils/js/helperFunctions";

const StyledFooter = styled.footer`
  height: 90px;
  background: ${props => props.theme.color_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconContainer = styled.div`
  width: 30%;
  min-width: 200px;
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

const Footer = () => {
  return (
    <StyledFooter>
      <IconContainer>
        {footerLinks.map(link => (
          <Link
            key={link.ariaLabel}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.ariaLabel}
          >
            <StyledIcon icon={link.icon} size="3x" />
          </Link>
        ))}
      </IconContainer>

      <UpButton onClick={() => scrollTo(0)}>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
      </UpButton>
    </StyledFooter>
  );
};

export default Footer;
