import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledGithub = styled.a`
  text-decoration: none;
  margin-right: auto;
  margin-left: 1rem;
  color: inherit;

  &:hover {
    color: ${props =>
      props.theme.name === "light"
        ? lighten(0.3, props.theme.font_Primary)
        : darken(0.3, props.theme.font_Primary)};
  }
`;

const GithubLink = ({ url }) => (
  <StyledGithub href={url} target="_blank" rel="noreferrer noopener">
    <FontAwesomeIcon icon={faGithub} size="2x" />
  </StyledGithub>
);

GithubLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GithubLink;
