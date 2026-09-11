import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("HELLO " + name);
}

function farewellHandler(name) {
  console.log("GOODBYE " + name);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", farewellHandler);

// Emit event
myEmitter.emit("greet", "Sanaz");
myEmitter.emit("goodbye", "Sanaz");

// Error handling
myEmitter.on("error", (err) => {
  console.log("AN ERROR OCCURED: ", err);
});

// Simulate error
myEmitter.emit("error", new Error("SOMETHING WENT WRONG"));
