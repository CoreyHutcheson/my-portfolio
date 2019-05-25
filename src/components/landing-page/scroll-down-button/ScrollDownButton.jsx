import React from "react";
import styled, { css } from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vhToPixels } from "src/utils/js/usePinStartHeight.js";

const transition = css`
  transition: 0.3s ease;
`;

const Icon = styled(FontAwesomeIcon)`
  ${transition};
`;

const StyledButton = styled.div`
  width: 120px;
  height: 50px;
  border: 3px solid ${props => props.theme.font_onPrimary1};
  color: ${props => props.theme.font_onPrimary1};
  ${props => props.theme.flexCenterMixin};
  cursor: pointer;
  text-decoration: none;
  ${transition};

  :hover {
    background: ${props => props.theme.color_accent};
    color: ${props => props.theme.font_onAccent};

    ${Icon} {
      transform: rotate(90deg);
    }
  }
`;

const ScrollDownButton = () => (
  <StyledButton
    onClick={() =>
      window.scrollTo({
        top: vhToPixels(100) - 50,
        left: 0,
        behavior: "smooth",
      })
    }
  >
    <Icon icon={faArrowRight} size="2x" className="scroll-down-btn" />
  </StyledButton>
);

export default ScrollDownButton;
