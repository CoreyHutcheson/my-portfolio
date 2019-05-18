import React from "react";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vhToPixels } from "src/utils/js/usePinStartHeight.js";

const Icon = styled(FontAwesomeIcon)`
  transition: 0.3s ease;
`;

const StyledButton = styled.div`
  width: 60px;
  height: 50px;
  background: green;
  color: inherit;
  ${props => props.theme.flexCenterMixin};
  cursor: pointer;
  text-decoration: none;

  :hover {
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
    <Icon icon={faArrowRight} size="2x" />
  </StyledButton>
);

export default ScrollDownButton;
