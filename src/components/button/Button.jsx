import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.div`
  background: ${props => props.theme.color_primary};
  color: ${props => props.theme.font_onPrimary1};
  width: 170px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0px;

  &:hover {
    background: ${props => props.theme.font_onPrimary1};
    color: ${props => props.theme.color_primaryLight};
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
