import React from "react";
import PropTypes from "prop-types";
import DefaultFade from "react-reveal";

const Fade = ({ children }) => <DefaultFade right>{children}</DefaultFade>;

Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Fade;
