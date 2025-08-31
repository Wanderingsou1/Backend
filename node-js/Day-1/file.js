const fs = require("fs")

const os = require("os");

console.log(os.cpus().length)

// *Write* //
// fs.writeFileSync("./text.txt", "Hello World!");


// fs.writeFile("./text.txt", "Hello world, this is an async code.", (err) =>{
//   console.log(err);
// })


// *Read* //
// const ans = fs.readFileSync("./text.txt", 'utf-8');
// console.log(ans);


// const ans = fs.readFile('./text.txt', 'utf-8', (error, data) => {
//   if(error) {
//     console.log(error);
//   }
//   else {
//     console.log(data);
//   }
// })



// Update
// fs.appendFileSync('./text.txt', new Date().toDateString());

// fs.appendFile('log.txt', "Hello world, this is Vaibhav.", (err) => {
//   console.log(err);
// })

// Delete
fs.unlink('./text.txt', (err) => {
  console.log(err.message);
});