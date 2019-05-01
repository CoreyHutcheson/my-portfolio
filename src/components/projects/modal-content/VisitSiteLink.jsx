import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "src/components/button";

const StyledLink = styled(Button)`
  color: #f5f5f5;
  background: #e31b6d;

  &:hover {
    background: #f5f5f5;
    color: #e31b6d;
  }

  & > span {
    margin-left: 10px;
  }
`;

const VisitSiteLink = ({ link }) => (
  <a
    style={{ textDecoration: "none" }}
    href={link}
    target="_blank"
    rel="noreferrer noopener"
  >
    <StyledLink>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
      <span>Visit Site</span>
    </StyledLink>
  </a>
);

VisitSiteLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default VisitSiteLink;
