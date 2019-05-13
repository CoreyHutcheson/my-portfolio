import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.font_onPrimary1};
  margin-left: auto;
  margin-right: 1rem;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Toggler = ({ handleClick, className }) => (
  <StyledFontAwesomeIcon
    icon={faBars}
    size="2x"
    onClick={handleClick}
    className={className}
  />
);

Toggler.propTypes = {
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Toggler;
