import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Fade from "../Fade";

import SectionTitle from "src/components/section-title";

const StyledSection = styled.section`
  background: ${props => props.theme.color_primaryLight};
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
  padding: ${props => props.theme.sectionPadding} 0;
`;

const RegularSection = ({ children, id, title, className }) => (
  <StyledSection id={id} className={className}>
    <Fade>
      <SectionTitle>{title}</SectionTitle>
    </Fade>

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
