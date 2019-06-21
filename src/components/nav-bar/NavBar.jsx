import React from "react";
import PropTypes from "prop-types";
import { Navbar as ReusableNavbar } from "@corey_hutcheson/reusable-react";

import { faSun, faMoon, faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SliderButton from "src/components/slider-button";

export const Navbar = props => {
  const { className, handleThemeChange } = props;

  const links = [
    {
      element: "about",
      text: "About",
    },
    {
      element: "projects",
      text: "Projects",
    },
    {
      element: "contact",
      text: "Contact",
    },
  ];

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
