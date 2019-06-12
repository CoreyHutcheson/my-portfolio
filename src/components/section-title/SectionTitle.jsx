import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${props => props.theme.font_onPrimary1};
  font-family: "Rubik", sans-serif;
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
`;

const SectionTitle = ({ children, className }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
