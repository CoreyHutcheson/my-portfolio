import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Fade from "../Fade";

import SectionTitle from "src/components/section-title";

const StyledSection = styled.section`
  background: ${props => props.theme.color_primaryDark};
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
  padding: 0 0 ${props => props.theme.sectionPadding};
`;

const StyledSvg = styled.svg`
  fill: ${props => props.theme.color_primaryLight};
  width: 100%;
  height: 50px;
  margin-bottom: ${props => props.theme.sectionPadding};
`;

const AngledSection = ({ children, id, title, className }) => (
  <StyledSection id={id} className={className}>
    <StyledSvg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="0 0, 50 100, 100 0" />
    </StyledSvg>

    <Fade>
      <SectionTitle>{title}</SectionTitle>
    </Fade>

    {children}
  </StyledSection>
);

AngledSection.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default AngledSection;
