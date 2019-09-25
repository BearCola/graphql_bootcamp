const message = "Some message from myModule.js";

const name = "BearCola";

const location = "Seoul";

const getGreeting = name => {
  return `Welcome to the course ${name}`;
};

export { getGreeting, message, name, location as default };
