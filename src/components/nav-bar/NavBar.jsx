import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollspy from "react-scrollspy";
import Headroom from "react-headroom";

import { ToggleButton } from "./ToggleButton";
import { Link } from "./Link";
import SliderButton from "src/components/slider-button";

const Header = styled.header`
  background: ${props => props.theme.color_primary};
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  color: ${props => props.theme.font_onPrimary1};
  margin-left: ${props => props.theme.margin};
`;

const StyledToggle = styled(ToggleButton)`
  margin-left: auto;
  margin-right: ${props => props.theme.margin};

  @media (min-width: 600px) {
    display: none;
  }
`;

const LinkContainer = styled(Scrollspy)`
  background: ${props => props.theme.color_primaryDark};
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50px;
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.open ? 0 : "-100%")});

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-left: ${props => props.theme.margin};
    background: inherit;
    position: relative;
    top: 0;
    transition: none;
    transform: translateX(0%);
  }
`;

const Slider = styled(SliderButton)`
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: ${props => props.theme.margin};
  }
`;

export const Navbar = props => {
  const {
    icon,
    scrollToOffset,
    children,
    className,
    handleThemeChange,
  } = props;
  const [open, setOpen] = useState(false);

  const handleTogglerClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const Links = children.map(({ props }) => (
    <Link
      key={props.element}
      element={props.element}
      handleLinkClick={handleLinkClick}
      scrollToOffset={scrollToOffset}
    >
      {props.text}
    </Link>
  ));

  return (
    <Headroom>
      <Header className={className}>
        {/* Include Icon Component if passed in via props */}
        {icon && <StyledIcon>{icon}</StyledIcon>}

        <StyledToggle open={open} handleClick={handleTogglerClick} />

        <LinkContainer
          open={open}
          items={["about", "projects", "contact"]}
          currentClassName="is-current"
          componentTag="nav"
          offset={-300}
        >
          {Links}

          <Slider
            handleChange={handleThemeChange}
            preText={<FontAwesomeIcon icon={faSun} />}
            postText={<FontAwesomeIcon icon={faMoon} />}
          />
        </LinkContainer>
      </Header>
    </Headroom>
  );
};

Navbar.defaultProps = {
  icon: false,
  scrollToOffset: 0,
};

Navbar.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  dark: PropTypes.bool,
  scrollOffset: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleThemeChange: PropTypes.func,
};
