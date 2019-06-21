import contactMessages from "src/data/contactMessages.json";

export const getRandomMessage = () => {
  const randomNumber = (min, max) => {
    return (
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
      Math.ceil(min)
    );
  };

  return contactMessages[randomNumber(0, contactMessages.length - 1)];
};

export const scrollTo = pos => {
  window.scrollTo({
    top: pos,
    left: 0,
    behavior: "smooth",
  });
};

export const sortObjects = (obj, sortBy) => {
  return obj.sort((a, b) => {
    let propA = a[sortBy].toUpperCase();
    let propB = b[sortBy].toUpperCase();

    return propA < propB ? -1 : propA > propB ? 1 : 0;
  });
};

export const getTitle = iconName => {
  const replacements = {
    code: "jsx",
  };

  return replacements.hasOwnProperty(iconName)
    ? replacements[iconName]
    : iconName;
};

export function vhToPixels(vh) {
  if (typeof window !== `undefined`) {
    return Math.round(window.innerHeight / (100 / vh));
  }
}
