import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "src/components/button";

const StyledLink = styled(Button)`
  background: ${props => props.theme.font_onPrimary1};
  color: ${props => props.theme.color_primary};

  &:hover {
    background: ${props => props.theme.color_primary};
    color: ${props => props.theme.font_onPrimary1};
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
