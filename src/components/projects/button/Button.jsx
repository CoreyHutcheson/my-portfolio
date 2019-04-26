import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%);

  transition: all 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    color: #f5f5f5;
    background: #e31b6d;
  }
`;

const Button = ({ className }) => (
  <StyledButton className={className}>Learn More</StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
