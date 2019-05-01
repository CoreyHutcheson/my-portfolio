import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.div`
  width: 170px;
  background: #f5f5f5;
  color: #e31b6d;
  border: 2px solid #e31b6d;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0px;

  &:hover {
    color: #f5f5f5;
    background: #e31b6d;
  }
`;

const Button = ({ children, className, handleClick }) => (
  <StyledButton onClick={handleClick} className={className}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
