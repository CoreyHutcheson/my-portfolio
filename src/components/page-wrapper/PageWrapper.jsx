import React from "react";
import PropTypes from "prop-types";

import LandingPage from "src/components/landing-page";
import NavBar from "src/components/nav-bar";
import Footer from "src/components/footer";

const PageWrapper = ({ children, handleThemeChange }) => (
  <>
    <header id="navbar">
      <NavBar handleThemeChange={handleThemeChange} />
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
