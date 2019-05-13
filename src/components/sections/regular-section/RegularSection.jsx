import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SectionTitle from "src/components/section-title";

const StyledSection = styled.section`
  background: ${props => props.theme.color_primaryLight};
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
  padding: ${props => props.theme.sectionPadding} 0;
`;

const RegularSection = ({ children, id, title, className }) => (
  <StyledSection id={id} className={className}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </StyledSection>
);

RegularSection.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default RegularSection;
