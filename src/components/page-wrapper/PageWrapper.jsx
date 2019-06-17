import React from "react";
import PropTypes from "prop-types";

import LandingPage from "src/components/landing-page";
import { Navbar } from "src/components/nav-bar";
import Footer from "src/components/footer";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageWrapper = ({ children, handleThemeChange }) => (
  <>
    <header id="navbar">
      <Navbar
        icon={<FontAwesomeIcon icon={faChessKing} size="2x" />}
        handleThemeChange={handleThemeChange}
      >
        <div element="about" text="About" />
        <div element="projects" text="Projects" />
        <div element="contact" text="Contact" />
      </Navbar>
    </header>

    <main>
      <LandingPage />
      {children}
    </main>

    <Footer />
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  handleThemeChange: PropTypes.func.isRequired,
};

export default PageWrapper;
