import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${props => props.theme.font_onPrimary1};
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.sectionBorderSpacer};

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 1rem;
    border-bottom: 4px solid ${props => props.theme.font_onPrimary1};
  }

  /** Animates border slide-in
  &:after {
    transform: translate(calc(50vw + 100%));
    transition: 1s ease;
  }

  &:hover:after {
    transform: translate(0);
  } */
`;

const SectionTitle = ({ children, className }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
