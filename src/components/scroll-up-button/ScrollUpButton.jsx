import React from "react";
import { withTheme } from "styled-components";
import ScrollButton from "react-scroll-up-button";
import { vhToPixels } from "src/utils/js/usePinStartHeight.js";

const ScrollUpButton = props => {
  const styles = {
    color: props.theme.font_onPrimary1,
  };

  return <ScrollButton ShowAtPosition={vhToPixels(100) - 51} style={styles} />;
};

export default withTheme(ScrollUpButton);
