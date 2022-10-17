const tutorial = require("./tutorial");

// console.log(tutorial.sum(12,3))
const some = new tutorial.SomeMathObject
console.log(some.add(1,2))
console.log(some[3]())
// new tutorial.SomeMathObject()


// What does the EventEmitter do in node 
// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter()

// eventEmitter.on("tutorial", ()=>{
//     console.log("Tutorial event has occured");
// });

// eventEmitter.emit("tutorial");

