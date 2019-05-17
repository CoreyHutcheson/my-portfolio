import baseTheme from "src/utils/styles/themes/baseTheme.js";

export default function useLandingPageHeight() {
  let { landingPageHeight, navbarHeight } = baseTheme;
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
