import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Toggler from "./Toggler";

const NavContainer = styled.nav`
  background: pink;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  background: yellow;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50px;

  @media (min-width: 600px) {
    display: block;
    position: relative;
    top: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  border-bottom: 2px solid black;

  &:first-child {
    border-top: 2px solid black;
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

      <LinkContainer isOpen={open} onClick={handleLinkClick}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/#projects">Projects</StyledLink>
        <StyledLink to="/#contact">Contact</StyledLink>
      </LinkContainer>
    </NavContainer>
  );
}

export default NavBar;
