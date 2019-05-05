import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

import Button from "./button";

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

function notFirstSlide(num) {
  return num + 100 <= 0;
}

function notLastSlide(num, slides) {
  return num - 100 >= (slides - 1) * -100;
}

const Carousel = ({ images = [] }) => {
  const [translateAmount, setTranslateAmount] = useState(0);

  const handlePrevClick = () =>
    notFirstSlide(translateAmount) && setTranslateAmount(translateAmount + 100);

  const handleNextClick = () =>
    notLastSlide(translateAmount, images.length) &&
    setTranslateAmount(translateAmount - 100);

  const buttons = (
    <>
      <Button text="Prev" handleClick={handlePrevClick} />
      <Button text="Next" handleClick={handleNextClick} />
    </>
  );

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

      {images.length > 1 ? buttons : null}
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  images: PropTypes.array,
};

export default Carousel;
