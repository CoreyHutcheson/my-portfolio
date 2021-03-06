import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.div`
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.87);
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;

  position: absolute;
  bottom: 0;
  right: ${({ text }) => text === "Next" && "0"};

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    color: rgba(0, 0, 0, 0.87);
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
