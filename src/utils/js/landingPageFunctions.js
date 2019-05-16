export function vhToPixels(vh) {
  return Math.round(window.innerHeight / (100 / vh));
}

export function stripLetters(str) {
  return str.replace(/\D/g, "");
}
