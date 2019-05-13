import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "src/utils/styles/global.js";
import baseTheme from "src/utils/styles/themes/baseTheme.js";
import lightTheme from "src/utils/styles/themes/lightTheme.js";
import darkTheme from "src/utils/styles/themes/darkTheme.js";

import PageWrapper from "src/components/page-wrapper";
import SectionTitle from "src/components/section-title";
import Projects from "src/components/projects";
import ContactForm from "src/components/contact-form";

const Section = styled.section`
  background: ${props => props.theme.color_background};
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
  padding: ${props => props.theme.sectionPadding} 0;
`;

const FormSection = styled(Section)`
  background: ${props => props.theme.color_backgroundDark};
  padding-top: 0;
  padding-bottom: ${props => props.theme.sectionPadding};
`;

const StyledSvg = styled.svg`
  fill: ${props => props.theme.color_background};
  width: 100%;
  height: 50px;
  margin-bottom: ${props => props.theme.sectionPadding};
`;

const IndexPage = () => {
  const [theme, setTheme] = useState({ ...baseTheme, ...lightTheme });

  const handleThemeChange = e => {
    e.target.checked
      ? setTheme({ ...baseTheme, ...darkTheme })
      : setTheme({ ...baseTheme, ...lightTheme });
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <PageWrapper handleThemeChange={handleThemeChange}>
          <Section id="projects">
            <SectionTitle>Projects</SectionTitle>
            <Projects />
          </Section>

          <FormSection id="contact">
            <StyledSvg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0 0, 50 100, 100 0" />
            </StyledSvg>
            <ContactForm />
          </FormSection>
        </PageWrapper>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
