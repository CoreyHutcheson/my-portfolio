import { useState, useEffect } from "react";
import baseTheme from "src/utils/styles/themes/baseTheme.js";

export default function useLandingPageHeight() {
  if (typeof window !== `undefined`) {
    const [pinStartHeight, setPinStartHeight] = useState(getHeight());

    useEffect(() => {
      const handleResize = () => setPinStartHeight(getHeight());

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    return pinStartHeight;
  }
}

function getHeight() {
  let { landingPageHeight, navbarHeight } = baseTheme;
  // '100vh' => 100 / '50px' => 50
  landingPageHeight = vhToPixels(convertToNumber(landingPageHeight));
  navbarHeight = convertToNumber(navbarHeight);

  return landingPageHeight - navbarHeight;
}

function vhToPixels(vh) {
  return Math.round(window.innerHeight / (100 / vh));
}

function convertToNumber(str) {
  return Number(str.replace(/\D/g, ""));
}
