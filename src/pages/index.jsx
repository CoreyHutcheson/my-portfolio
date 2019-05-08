import React from "react";
import styled, { ThemeProvider } from "styled-components";

import PageWrapper from "src/components/page-wrapper";
import Projects from "src/components/projects";
import ContactForm from "src/components/contact-form";

const spacer = "4rem";

const FormSection = styled.section`
  background: #252934;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${spacer};
`;

const StyledSvg = styled.svg`
  width: 100%;
  height: 50px;
  margin-bottom: ${spacer};
  fill: ${props => props.primaryBackground || "white"};
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Projects />

        <FormSection>
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
    </ThemeProvider>
  );
};

export default IndexPage;
