import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;

  position: absolute;
  bottom: 0;
  right: ${({ text }) => text === "Next" && "0"};

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

const Button = ({ text, handleClick }) => {
  return (
    <StyledButton text={text} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
