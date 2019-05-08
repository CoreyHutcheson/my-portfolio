import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${props => props.color || "black"};
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;

  // Creates border underneath
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 1rem;
    border-bottom: 4px solid ${props => props.color || "black"};
  }

  // Animates border slide-in
  // &:after {
  //   transform: translate(calc(50vw + 100%));
  //   transition: 1s ease;
  // }

  // &:hover:after {
  //   transform: translate(0);
  // }
`;

const SectionTitle = ({ color, children }) => (
  <StyledTitle color={color}>{children}</StyledTitle>
);

SectionTitle.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
