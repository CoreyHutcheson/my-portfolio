import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FieldContainer = styled.div`
  grid-column: span 2;

  @media (min-width: 500px) {
    grid-column: span 1;
  }
`;

const FormField = styled.input`
  width: calc(100% - 2px);
  padding: 0 5px;

  &:focus {
    &::-webkit-input-placeholder,
    &:-moz-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder {
      color: transparent;
    }
  }
`;

const Input = ({ title, placeholder, className }) => (
  <FieldContainer>
    <label htmlFor={title} className={className}>
      {title.charAt(0).toUpperCase() + title.substring(1)}
    </label>
    <FormField type="text" name={title} id={title} placeholder={placeholder} />
  </FieldContainer>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
