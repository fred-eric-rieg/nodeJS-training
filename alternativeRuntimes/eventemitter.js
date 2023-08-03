/**
 * Event Emitter Example
 */

const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

// Event Listener with callback function on event "lunch"
eventEmitter.on("lunch", () => {
    console.log("yum");
});


// Trigger event "lunch"
eventEmitter.emit("lunch");
eventEmitter.emit("lunch");