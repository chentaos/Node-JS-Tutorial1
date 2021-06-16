const eventEmitter = require("events");

const myEmitter = new eventEmitter();

myEmitter.on("response", (name, id) => {
  console.log(`Response to ${name}, id: ${id}`);
});

myEmitter.on("response", () => {
  console.log("Second response");
});

myEmitter.emit("response", "John", 12);
