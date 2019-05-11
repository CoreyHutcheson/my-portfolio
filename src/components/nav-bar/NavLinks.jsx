import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import links from "src/data/navLinks.js";

const StyledLink = styled(Link)`
  color: ${props => props.theme.font_Primary};
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  border-bottom: 2px solid grey;

  &:first-child {
    border-top: 2px solid grey;
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

const NavLinks = ({ handleClick }) => {
  return Object.keys(links).map(link => {
    const url = links[link] !== "/" ? `/${links[link]}` : "/";

    return (
      <StyledLink key={link} to={url} onClick={handleClick}>
        {link}
      </StyledLink>
    );
  });
};

NavLinks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavLinks;
