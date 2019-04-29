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

  color: ${props =>
    props.text === "Prev" ? "red" : props.text === "Next" ? "blue" : "green"};

  left: ${props => (props.text === "Prev" ? "0" : "auto")};
  right: ${props => (props.text === "Next" ? "0" : "auto")};
`;

// const LeftButton = styled(StyledButton)`
//   left: 0;
// `;

// const RightButton = styled(StyledButton)`
//   right: 0;
// `;

const Button = ({ text, handleClick }) => {
  console.log(text);
  // return text === "Prev" ? (
  //   <LeftButton onClick={handleClick}>Prev</LeftButton>
  // ) : (
  //   <RightButton onClick={handleClick}>Next</RightButton>
  // );

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
