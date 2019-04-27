import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledPanel = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid red;
  position: relative;
  cursor: pointer;

  background: #f5f5f5;
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

  font-family: "Raleway";
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

const Button = styled.div`
  width: 170px;
  background: #f5f5f5;
  color: #e31b6d;
  border: 2px solid #e31b6d;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0px;

  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%);

  transition: all 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    color: #f5f5f5;
    background: #e31b6d;
  }

  ${StyledPanel}:hover & {
    bottom: 20%;
    transform: translate(-50%, 0%);
    opacity: 1;
  }
`;

const Panel = ({ src, alt, title }) => (
  <StyledPanel>
    <Image fluid={src} alt={alt} />
    <Title>{title}</Title>
    <Button>Learn More</Button>
  </StyledPanel>
);

Panel.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Panel;
