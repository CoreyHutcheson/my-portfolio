import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import ScrollButton from "react-scroll-up-button";
import { vhToPixels } from "src/utils/js/usePinStartHeight.js";

const Container = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

const ScrollUpButton = props => {
  const [showButton, setShowButton] = useState(true);

  const handleScroll = () => {
    let hideHeight = document.body.clientHeight - window.innerHeight - 90;
    let scrollHeight = window.scrollY;

    if (scrollHeight > hideHeight) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
