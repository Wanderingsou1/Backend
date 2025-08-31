const crypto = require("crypto");

// 1. RandomBytes

const randomValues = crypto.randomBytes(4);
console.log(randomValues.toString("hex"));



// 2. CreateHash
const hashValue = crypto.createHash("sha256").update("Vaibhav").digest("hex");
const inputValue = "Vaibhav";
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex");

console.log(hashValue === matchValue);