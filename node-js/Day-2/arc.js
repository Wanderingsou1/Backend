// const fs = require("fs");

// setImmediate(() => {
//   console.log("Hello from Immediate -1");
// }, 0);

// console.log("Hello world -1");

// setTimeout(() => {
//   console.log("Hello from Timeout -1");
// }, 0);

// const fun = (callback) => {
//   let name = "vk";
//   callback(name);
// };
// const fun2 = (name) => {
//   console.log(name);
// };
// fun(fun2);

process.env.UV_THREADPOOL_SIZE = 5;
let start = Date.now();
const { log } = require("console");
const crypto = require("crypto");

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start} ms Done`);  
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start} ms Done`);  
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start} ms Done`);  
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start} ms Done`);  
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start} ms Done`);  
})
