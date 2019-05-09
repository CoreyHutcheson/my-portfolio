import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { lighten } from "polished";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.secondaryBackground || "black"};
  min-height: 50px;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  background: ${props => lighten(0.05, props.theme.secondaryBackground)};
  position: absolute;
  top: 50px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin-left: 10%;
    background: inherit;
    position: static;
    top: 0;
  }
`;

const StyledLink = styled(Link)`
  color: lightblue;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;

  @media (min-width: 600px) {
    padding: 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const ToggleContainer = styled.div`
  margin: 0 1rem 0 auto;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

const StyledToggleBars = styled(FontAwesomeIcon)`
  color: lightblue;
`;

const activeLinkStyle = {
  color: "white",
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledNav>
      <ToggleContainer>
        <StyledToggleBars
          isOpen={open}
          icon={faBars}
          size="2x"
          onClick={handleToggleClick}
        />
      </ToggleContainer>

      <LinkContainer isOpen={open}>
        <StyledLink to="/" activeStyle={activeLinkStyle}>
          Home
        </StyledLink>
        <StyledLink to="/#projects" activeStyle={activeLinkStyle}>
          Projects
        </StyledLink>
        <StyledLink to="/#contact" activeStyle={activeLinkStyle}>
          Contact
        </StyledLink>
      </LinkContainer>
    </StyledNav>
  );
};

export default NavBar;
