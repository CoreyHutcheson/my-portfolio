import React from "react";

import "./style.scss";

const FormInput = ({ title, placeholder }) => (
  <div className="form__field-container">
    <label htmlFor={title}>
      {title.charAt(0).toUpperCase() + title.substring(1)}
    </label>
    <input
      type="text"
      className="form__field"
      name={title}
      id={title}
      placeholder={placeholder}
    />
  </div>
);

function ContactForm() {
  return (
    <div className="form-container">
      <h2>Contact Us!</h2>
      <p className="form__contact-text">
        If you have any questions or feedback, please don't hesitate to send us
        an email.
      </p>
      <form
        name="contact"
        className="form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />

        <FormInput title="name" placeholder="John Smith" />

        <FormInput title="email" placeholder="john_smith@gmail.com" />

        <div className="form__field-container form__field-container--full">
          <label htmlFor="message">Message</label>
          <textarea
            className="form__field--message"
            name="message"
            id="message"
            rows="6"
            placeholder="I'd like to inquiry about..."
          />
        </div>

        <div className="form__button-container">
          <input type="submit" value="Submit" className="form__button" />
          <input type="reset" value="Clear" className="form__button" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
