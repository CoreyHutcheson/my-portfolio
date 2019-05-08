import React from "react";
import styled from "styled-components";

import Input from "./input";
import SectionTitle from "src/components/section-title";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: calc(300px - 2rem);
  max-width: 500px;
`;

const StyledForm = styled.form`
  width: 100%;
  background: #eee;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  text-align: left;
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
  color: white;
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
`;

const FieldContainerFull = styled.div`
  grid-column: span 2;

  @media (min-width: 500px) {
    grid-column: span 2;
  }
`;

const ContactForm = () => (
  <FormContainer>
    <SectionTitle color="white">Contact</SectionTitle>

    <ContactText>Have a question or want to work together?</ContactText>

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

export default ContactForm;
