import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Headroom from "react-headroom";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggler from "./Toggler";
import NavLinks from "./NavLinks";
import SliderButton from "src/components/slider-button";
import useLandingPageHeight from "src/utils/js/landingPageFunctions.js";

const NavContainer = styled.nav`
  background: ${props => props.theme.color_primary};
  position: relative;
  width: 100%;
  min-height: 50px;
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
`;

const LinkContainer = styled.div`
  background: ${props => props.theme.color_primaryDark};
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50px;
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.open ? "0" : "-100%")});

  @media (min-width: 600px) {
    ${props => props.theme.flexCenterMixin}
    flex-direction: row;
    background: inherit;
    position: relative;
    top: 0;
    transition: none;
    transform: translateX(0%);
  }
`;

const StyledSlider = styled(SliderButton)`
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: 15%;
  }
`;

const NavBar = ({ handleThemeChange, className }) => {
  const [open, setOpen] = useState(false);
  const pinStartHeight = useLandingPageHeight();

  const handleTogglerClick = () => setOpen(!open);

  const handleLinkClick = () => setOpen(false);

  return (
    <Headroom pinStart={pinStartHeight}>
      <NavContainer className={className}>
        <Toggler handleClick={handleTogglerClick} />

        <LinkContainer open={open}>
          <NavLinks handleClick={handleLinkClick} />

          <StyledSlider
            handleChange={handleThemeChange}
            preText={<FontAwesomeIcon icon={faSun} />}
            postText={<FontAwesomeIcon icon={faMoon} />}
          />
        </LinkContainer>
      </NavContainer>
    </Headroom>
  );
};

NavBar.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default NavBar;
