import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  transition: 0.3s ease;
`;

const StyledButton = styled(Link)`
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
  <StyledButton to="/#navbar">
    <Icon icon={faArrowRight} size="2x" />
  </StyledButton>
);

ScrollDownButton.propTypes = {};

export default ScrollDownButton;
