import messages from "src/data/contactMessages.js";

const getRandomMessage = () => messages[randomNumber(0, messages.length - 1)];

const randomNumber = (min, max) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

export default getRandomMessage;
