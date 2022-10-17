const tutorial = require("./tutorial");

// console.log(tutorial.sum(12,3))
const some = new tutorial.SomeMathObject("Enock")
const second = new tutorial.SomeMathObject("Elijah")
some.on('name',()=>{
    console.log("My name is ",some._name);
});

second.on('name',()=>{
    console.log("His name is ",second._name);
})

// now call the emitter 
second.emit('name')
some.emit('name')
// What does the EventEmitter do in node 
// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter()

// eventEmitter.on("tutorial", ()=>{
//     console.log("Tutorial event has occured");
// });

// eventEmitter.emit("tutorial");

