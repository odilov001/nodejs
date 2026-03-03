const memory = require("os");
const folder = require("fs");

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on("message", (arg) => {
	console.log("Event Listener.....", arg);
});
emitter.emit("message", { id: 1, url: "https://google.com" });

// console.log(memory.freemem()); //71581696 BIT
// console.log(memory.platform());
// console.log(memory.totalmem()); //8589934592 BIT

// folder.readFile("index.js", (err, file) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(file);
// 	}
// });
