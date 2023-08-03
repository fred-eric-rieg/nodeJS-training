/**
 * Filesystem examples
 */

const { readFile, readFileSync } = require("fs");


// Synchronous example
const txt = readFileSync('./hello.txt', 'utf8')

console.log(txt);

console.log("Do this ASAP");
console.log("Synchronous example done");

// Asynchronous example
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
    console.log("Asynchronous example done");
});

console.log("Do this ASAP");