import React from "react";
import { withTheme } from "styled-components";
import ScrollButton from "react-scroll-up-button";
import { vhToPixels } from "src/utils/js/helperFunctions";

const ScrollUpButton = props => {
  let timeout = null;
  const [scrolling, setScrolling] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleShowLogic = () => {
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

  const onScroll = () => {
    if (!scrolling) {
      setScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        handleShowLogic();
        setScrolling(false);
      }, 200);
    }
  };

  // window wrapper for netlify build process
  if (typeof window !== `undefined`) {
    useEffect(() => {
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    });
  }

  const styles = {
    color: props.theme.font_onPrimary1,
  };

  return <ScrollButton ShowAtPosition={vhToPixels(100) - 51} style={styles} />;
};

export default withTheme(ScrollUpButton);
