import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "src/components/button";

const StyledLink = styled(Button)`
  background: ${props => props.theme.color_primaryLight};
  color: ${props => props.theme.font_onPrimary1};

  &:hover {
    background: ${props => props.theme.font_onPrimary1};
    color: ${props => props.theme.color_primaryLight};
  }

  & > span {
    margin-left: 10px;
  }
`;

const VisitSiteLink = ({ link, className }) => (
  <a
    style={{ textDecoration: "none" }}
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    className={className}
  >
    <StyledLink>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
      <span>Visit Site</span>
    </StyledLink>
  </a>
);

VisitSiteLink.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default VisitSiteLink;
