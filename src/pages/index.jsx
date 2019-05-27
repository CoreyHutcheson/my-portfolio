import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "src/utils/styles/global.js";
import baseTheme from "src/utils/styles/themes/baseTheme.js";
import lightTheme from "src/utils/styles/themes/lightTheme.js";
import darkTheme from "src/utils/styles/themes/darkTheme.js";

import PageWrapper from "src/components/page-wrapper";
import RegularSection from "src/components/sections/regular-section";
import AngledSection from "src/components/sections/angled-section";

import About from "src/components/sections/about";
import Projects from "src/components/projects";
import ContactForm from "src/components/contact-form";
import ScrollUpButton from "src/components/scroll-up-button";

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
          <RegularSection id="about" title="About">
            <About />
          </RegularSection>

          <AngledSection id="projects" title="Projects">
            <Projects />
          </AngledSection>

          <RegularSection id="contact" title="Contact">
            <ContactForm />
          </RegularSection>

          <ScrollUpButton />
        </PageWrapper>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
