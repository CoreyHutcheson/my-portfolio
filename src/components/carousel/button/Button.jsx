import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.6);
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;

  position: absolute;
  bottom: 0;
  left: ${props => (props.left ? "0" : "auto")};
  right: ${props => (props.right ? "0" : "auto")};
`;

const Button = props => {
  console.log(props);

  return <StyledButton>Test</StyledButton>;
};

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Button;
