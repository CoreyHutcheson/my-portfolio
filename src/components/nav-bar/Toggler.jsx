import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.font_Primary};
  margin-left: auto;
  margin-right: 1rem;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Toggler = ({ handleClick }) => (
  <StyledFontAwesomeIcon icon={faBars} size="2x" onClick={handleClick} />
);

Toggler.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Toggler;
