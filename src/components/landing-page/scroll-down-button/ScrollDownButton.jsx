import React from "react";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vhToPixels } from "src/utils/js/helperFunctions";
import { scrollTo } from "src/utils/js/helperFunctions";

const Icon = styled(FontAwesomeIcon)`
  transition: transform 0.3s ease;
`;

const StyledButton = styled.div`
  ${props => props.theme.flexCenterMixin};
  background: inherit;
  color: ${props => props.theme.font_onPrimary1};
  border: 3px solid ${props => props.theme.font_onPrimary1};
  width: 120px;
  height: 50px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background: ${props => props.theme.color_accent};
    color: ${props => props.theme.font_onAccent};

    ${Icon} {
      transform: rotate(90deg);
    }
  }
`;

const ScrollDownButton = () => (
  <StyledButton onClick={() => scrollTo(vhToPixels(100) - 50)}>
    <Icon icon={faArrowRight} size="2x" className="scroll-down-btn" />
  </StyledButton>
);

export default ScrollDownButton;
