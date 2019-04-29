import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

import Button from "./button";

const StyledCarousel = styled.div`
  position: relative;
  height: 60%;
  overflow: hidden;
`;

const Window = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  transition: all 0.3s ease-in-out;
  // transform: translate();
`;

const StyledImage = styled(Img)`
  min-width: 100%;
  width: 100%;
  object-fit: cover;
`;

const Carousel = ({ images = [] }) => {
  return (
    <StyledCarousel>
      <Window>
        {images.map(img => (
          <StyledImage
            key={img.src.id}
            fluid={img.src.childImageSharp.fluid}
            alt={img.alt_text}
          />
        ))}
      </Window>

      <Button text="Prev" handleClick={() => console.log("previous")} />
      <Button text="Next" handleClick={() => console.log("next")} />
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  images: PropTypes.array,
};

export default Carousel;
