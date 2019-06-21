import React from "react";
import PropTypes from "prop-types";
import { faSun, faMoon, faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar as ReusableNavbar } from "@corey_hutcheson/reusable-react";
import { SliderButton } from "./SliderButton.jsx";
import links from "src/data/navLinks.json";

export const Navbar = props => {
  const { className, handleThemeChange } = props;

  return (
    <ReusableNavbar
      links={links}
      icon={<FontAwesomeIcon icon={faChessKing} size="2x" />}
      extraComp={
        <SliderButton
          handleChange={handleThemeChange}
          preText={<FontAwesomeIcon icon={faSun} />}
          postText={<FontAwesomeIcon icon={faMoon} />}
        />
      }
      className={className}
    />
  );
};

Navbar.defaultProps = {
  icon: false,
  scrollToOffset: 0,
};

Navbar.propTypes = {
  className: PropTypes.string,
  handleThemeChange: PropTypes.func,
};
