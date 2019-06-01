const scrollTo = pos => {
  window.scrollTo({
    top: pos,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollTo;
