import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten } from "polished";

import Toggler from "./Toggler";
import NavLinks from "./NavLinks";
import SliderButton from "src/components/slider-button";

const NavContainer = styled.nav`
  position: relative;
  background: ${props => props.theme.secondaryBackground};
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  background: ${props => lighten(0.05, props.theme.secondaryBackground)};
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50px;
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.open ? "0" : "-100%")});

  @media (min-width: 600px) {
    display: block;
    background: inherit;
    position: relative;
    top: 0;

    transition: none;
    transform: translateX(0%);
  }
`;

const NavBar = ({ handleThemeChange }) => {
  const [open, setOpen] = useState(false);

  const handleTogglerClick = () => setOpen(!open);

  const handleLinkClick = () => setOpen(false);

  return (
    <NavContainer>
      <Toggler handleClick={handleTogglerClick} />

      <LinkContainer open={open}>
        <NavLinks handleClick={handleLinkClick} />

        <SliderButton handleChange={handleThemeChange} />
      </LinkContainer>
    </NavContainer>
  );
};

NavBar.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};

export default NavBar;
