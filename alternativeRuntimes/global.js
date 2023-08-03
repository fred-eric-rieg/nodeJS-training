/**
 * Some global and process runtime examples
 */

console.log("Hello World");

//Runtime
console.log("global.luckyNum before declaration: ", global.luckyNum);

global.luckyNum = 23;

console.log("global.luckyNum: ", global.luckyNum);

console.log("process.platform: ", process.platform);

console.log("process.env.USER: ", process.env.USER);