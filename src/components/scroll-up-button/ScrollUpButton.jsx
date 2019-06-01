import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import ScrollButton from "react-scroll-up-button";
import { vhToPixels } from "src/utils/js/usePinStartHeight.js";

const Container = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

const ScrollUpButton = props => {
  let scrolling = false;
  const [showButton, setShowButton] = useState(true);

  const handleScroll = () => {
    if (typeof window !== `undefined`) {
      let hideHeight = document.body.clientHeight - window.innerHeight - 150;
      let scrollHeight = window.scrollY;

      if (scrollHeight > hideHeight) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    }
  };

  const scrollingEvent = () => {
    scrolling = true;
  };

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      handleScroll();
    }
  }, 250);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("scroll", scrollingEvent);

      return () => {
        window.removeEventListener("scroll", scrollingEvent);
      };
    }
  });

  const styles = {
    color: props.theme.font_onPrimary1,
  };

  return (
    <Container show={showButton}>
      <ScrollButton ShowAtPosition={vhToPixels(100) - 51} style={styles} />
    </Container>
  );
};

export default withTheme(ScrollUpButton);
