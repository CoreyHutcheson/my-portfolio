import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { lighten } from "polished";

import Toggler from "./Toggler";

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

const StyledLink = styled(Link)`
  color: #ddd;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  border-bottom: 2px solid grey;

  &:first-child {
    // border-top: 2px solid grey;
  }

  @media (min-width: 600px) {
    padding: 0;
    border-bottom: none;

    &:first-child {
      border-top: none;
    }

    &:first-child {
      margin-left: 15%;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleTogglerClick = () => setOpen(!open);

  const handleLinkClick = () => setOpen(false);

  return (
    <NavContainer>
      <Toggler handleClick={handleTogglerClick} />

      <LinkContainer open={open} onClick={handleLinkClick}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/#projects">Projects</StyledLink>
        <StyledLink to="/#contact">Contact</StyledLink>
      </LinkContainer>
    </NavContainer>
  );
}

export default NavBar;
