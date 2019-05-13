import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

import Button from "src/components/button";

const StyledPanel = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  cursor: pointer;

  background: ${props => props.theme.color_secondary};
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  vertical-align: bottom;

  opacity: 1;
  transition: all 0.3s ease-in-out;

  ${StyledPanel}:hover & {
    opacity: 0;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);

  font-size: 1.5rem;
  font-weight: 600;

  padding: 5px 0;
  width: 100%;
  text-align: center;

  transition: all 0.3s ease-in-out;
  opacity: 0;

  ${StyledPanel}:hover & {
    top: 20%;
    transform: translate(-50%, 0%);
    opacity: 1;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%);

  transition: all 0.3s ease-in-out;
  opacity: 0;

  ${StyledPanel}:hover & {
    bottom: 20%;
    transform: translate(-50%, 0%);
    opacity: 1;
  }
`;

const Panel = ({
  title,
  tag,
  description,
  technologies,
  link = "",
  github = "",
  images,
  openModal,
}) => {
  const modalInfo = {
    title,
    tag,
    description,
    technologies,
    link,
    github,
    images,
  };

  return (
    <StyledPanel>
      <Image
        fluid={images[0].src.childImageSharp.fluid}
        alt={images[0].alt_text}
      />

      <Title>{title}</Title>

      <StyledButton handleClick={() => openModal(modalInfo)}>
        Learn More
      </StyledButton>
    </StyledPanel>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Panel;
