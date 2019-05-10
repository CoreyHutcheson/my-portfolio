import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledToggler = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  border: 1px solid red;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Toggler = ({ handleClick }) => (
  <StyledToggler>
    <FontAwesomeIcon icon={faBars} size="2x" onClick={handleClick} />
  </StyledToggler>
);

Toggler.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Toggler;
