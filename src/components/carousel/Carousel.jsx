import React, { useState } from "react";
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
`;

const StyledImage = styled(Img)`
  min-width: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  transform: translate(${props => `${props.translateAmount}%`});
`;

const Carousel = ({ images = [] }) => {
  const [translateAmount, setTranslateAmount] = useState(0);

  const handlePrevClick = () => {
    let newTranslate = translateAmount + 100;
    if (newTranslate <= 0) {
      setTranslateAmount(newTranslate);
    }
  };

  const handleNextClick = () => {
    let newTranslate = translateAmount - 100;
    if (newTranslate >= (images.length - 1) * -100) {
      setTranslateAmount(newTranslate);
    }
  };

  return (
    <StyledCarousel>
      <Window>
        {images.map(img => (
          <StyledImage
            key={img.src.id}
            fluid={img.src.childImageSharp.fluid}
            translateAmount={translateAmount}
            alt={img.alt_text}
          />
        ))}
      </Window>

      <Button text="Prev" handleClick={handlePrevClick} />
      <Button text="Next" handleClick={handleNextClick} />
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  images: PropTypes.array,
};

export default Carousel;
