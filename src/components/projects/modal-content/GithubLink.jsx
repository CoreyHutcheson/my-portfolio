import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledGithub = styled.a`
  text-decoration: none;
  margin-right: auto;
  margin-left: 1rem;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    color: rgba(0, 0, 0, 1);
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
