import { EventEmitter } from "events";

const emitter = new EventEmitter();


emitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});


emitter.on("exit", () => {
    console.log("Program is exiting...");
});


emitter.emit("greet", "Deepak");


emitter.emit("exit");