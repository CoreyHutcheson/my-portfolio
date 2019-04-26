import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);

  font-family: "Raleway";
  font-size: 1.5rem;
  font-weight: 600;

  padding: 5px 0;

  transition: all 0.3s ease-in-out;
  opacity: 0;
`;

const Title = ({ className, children }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title;
