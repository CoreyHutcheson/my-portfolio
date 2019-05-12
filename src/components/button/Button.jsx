import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.div`
  width: 170px;
  background: ${props => props.theme.background_Secondary};
  color: ${props => props.theme.font_Primary};
  border: 2px solid ${props => props.theme.font_Primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0px;

  &:hover {
    color: ${props => props.theme.background_Secondary};
    background: ${props => props.theme.font_Primary};
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
