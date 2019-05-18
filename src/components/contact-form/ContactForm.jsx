import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "./input";
import getRandomMessage from "src/utils/js/getRandomMessage.js";

const FormContainer = styled.div`
  ${props => props.theme.flexCenterMixin}
  flex-direction: column;
  width: 100%;
  min-width: calc(300px - 2rem);
  max-width: 500px;
  padding: 0 1rem;
`;

const StyledForm = styled.form`
  background: ${props => props.theme.color_primaryDark};
  color: ${props => props.theme.font_onPrimary1};
  border: 1px solid ${props => props.theme.font_onPrimary1};
  border-radius: 5px;
  width: 100%;
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  text-align: left;

  & label {
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.input`
  margin: 0 10px;
  padding: 5px 15px;
`;

const Message = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
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

const ContactText = styled.p`
  color: ${props => props.theme.font_onPrimary2};
  text-align: center;
  font-size: 1.2rem;
  margin: 0 0 ${props => props.theme.sectionBorderSpacer};
`;

const FieldContainerFull = styled.div`
  grid-column: span 2;

  @media (min-width: 500px) {
    grid-column: span 2;
  }
`;

const ContactForm = ({ className }) => (
  <FormContainer className={className}>
    <ContactText>{getRandomMessage()}</ContactText>

    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />

      <Input title="name" placeholder="John Smith" />

      <Input title="email" placeholder="john_smith@gmail.com" />

      <FieldContainerFull>
        <label htmlFor="message">Message</label>
        <Message
          name="message"
          id="message"
          rows="6"
          placeholder="I'd like to inquiry about..."
        />
      </FieldContainerFull>

      <ButtonContainer>
        <StyledButton type="submit" value="Submit" />
        <StyledButton type="reset" value="Clear" />
      </ButtonContainer>
    </StyledForm>
  </FormContainer>
);

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
