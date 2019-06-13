import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import links from "src/data/navLinks.js";

// Used for smooth-scrolling of links
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const contentBorderMixin = color => css`
  :after,
  :before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    border-bottom: 2px solid ${props => color || props.theme.font_onPrimary1};
    transition: 0.3s ease;
  }

  :after {
    bottom: -4px;
    left: 0;
  }

  :before {
    top: -4px;
    right: 0;
  }
`;

const StyledLink = styled(Link).attrs(props => ({
  border: `1px solid ${props.theme.color_primaryLight}`,
}))`
  color: ${props => props.theme.font_onPrimary1};
  border-bottom: ${props => props.border};
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  position: relative;

  &[isactive="true"] {
    background: ${props => props.theme.color_primaryLight};
  }

  &:first-child {
    border-top: ${props => props.border};
  }

  :hover {
    background: ${props => props.theme.color_primaryLight};
  }

  @media (min-width: 600px) {
    padding: 0;
    border-bottom: none;

    &:first-child {
      border-top: none;
      margin-left: 5%;
    }

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    :hover {
      background: inherit;

      :after,
      :before {
        width: 100%;
      }
    }

    ${props => contentBorderMixin(props.theme.font_onPrimary1)};

    &[isactive="true"] {
      background: inherit;

      ${props => contentBorderMixin(props.theme.color_accent)};

      :after,
      :before {
        width: 100%;
      }
    }
  }
`;

const NavLinks = ({ handleClick, className, activeLink }) => {
  return Object.keys(links).map(link => {
    const url = links[link] !== "/" ? `/${links[link]}` : "/";

    return (
      <StyledLink
        key={link}
        to={url}
        onClick={() => handleClick(url)}
        className={className}
        isactive={activeLink === url ? "true" : "false"}
      >
        {link}
      </StyledLink>
    );
  });
};

NavLinks.propTypes = {
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  activeLink: PropTypes.string,
};

export default NavLinks;
