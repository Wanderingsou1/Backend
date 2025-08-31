const EventEmitter = require("events");

const emitter = new EventEmitter();

//on(eventName, listener)====== create 

emitter.on("greet", ()=> {
  console.log("Hello World");
})




//emit(eventName, [args])====== execute

emitter.emit("greet");  


