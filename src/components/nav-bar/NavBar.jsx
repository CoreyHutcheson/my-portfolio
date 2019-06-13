import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import { faMoon, faSun, faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggler from "./Toggler";
import NavLinks from "./NavLinks";
import SliderButton from "src/components/slider-button";

const NavContainer = styled.nav`
  background: ${props => props.theme.color_primary};
  position: relative;
  width: 100%;
  min-height: 50px;
  ${props => props.theme.flexCenterMixin}
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
    margin-right: 5%;
  }
`;

const MyIcon = styled(FontAwesomeIcon)`
  margin-left: 2rem;
  color: ${props => props.theme.font_onPrimary1};
`;

const NavBar = ({ handleThemeChange, className }) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleTogglerClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = activeLink => {
    setOpen(false);
    setActiveLink(activeLink);
  };

  return (
    <Headroom>
      <NavContainer className={className}>
        <Link to="/">
          <MyIcon icon={faChessKing} size="2x" />
        </Link>

        <Toggler handleClick={handleTogglerClick} />

        <LinkContainer open={open}>
          <NavLinks handleClick={handleLinkClick} activeLink={activeLink} />

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
