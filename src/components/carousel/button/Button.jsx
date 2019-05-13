import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.div`
  background: ${props => props.theme.color_secondary};
  color: ${props => props.theme.font_onOther1};
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;

  position: absolute;
  bottom: 0;
  right: ${({ text }) => text === "Next" && "0"};

  &:hover {
    background: ${props => props.theme.font_onOther1};
    color: ${props => props.theme.color_secondary};
    cursor: pointer;
  }
`;

const Button = ({ text, handleClick, className }) => {
  return (
    <StyledButton text={text} onClick={handleClick} className={className}>
      <FontAwesomeIcon
        icon={text === "Prev" ? faChevronLeft : faChevronRight}
        size="2x"
      />
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
