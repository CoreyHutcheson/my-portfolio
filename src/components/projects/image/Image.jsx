import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  vertical-align: bottom;

  opacity: 1;
  transition: all 0.3s ease-in-out;
`;

const Image = ({ src, alt, className }) => (
  <StyledImage fluid={src} alt={alt} className={className} />
);

Image.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
