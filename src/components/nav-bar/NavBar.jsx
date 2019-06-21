import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar as ReusableNavbar } from "@corey_hutcheson/reusable-react";
import { Icon } from "./Icon.jsx";
import { SliderButton } from "./SliderButton.jsx";
import links from "src/data/navLinks.json";

export const Navbar = props => {
  const { className, handleThemeChange } = props;
  const theme = useContext(ThemeContext);

  return (
    <ReusableNavbar
      links={links}
      icon={<Icon />}
      theme={theme}
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
