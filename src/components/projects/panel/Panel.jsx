import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Image from "../image";
import Title from "../title";
import Button from "../button";

const StyledPanel = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid red;
  position: relative;
  cursor: pointer;

  background: #f5f5f5;
`;

const StyledImage = styled(Image)`
  ${StyledPanel}:hover & {
    opacity: 0;
  }
`;

const StyledTitle = styled(Title)`
  ${StyledPanel}:hover & {
    top: 20%;
    transform: translate(-50%, 0%);
    opacity: 1;
  }
`;

const StyledButton = styled(Button)`
  ${StyledPanel}:hover & {
    bottom: 20%;
    transform: translate(-50%, 0%);
    opacity: 1;
  }
`;

const Panel = ({ src, alt, title }) => (
  <StyledPanel>
    <StyledImage src={src} alt={alt} />
    <StyledTitle>{title}</StyledTitle>
    <StyledButton />
  </StyledPanel>
);

Panel.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Panel;
