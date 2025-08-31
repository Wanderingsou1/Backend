const http = require("http")
const fs = require("fs")
const {Transform, pipeline} = require("stream")

const PORT  = 8080;

const server = http.createServer((req, res) => {

  // const file = fs.readFileSync("file.txt");

  // res.end(file);


  // -------------------------- Using Stream ------------------------------ //
  // const readableStream = fs.createReadStream("file.txt")
  // readableStream.pipe(res)
  // // res.end();



  // const readStream = fs.createReadStream("file.txt");
  // const writeStream = fs.createWriteStream("output.txt")

  // readStream.on("data", (chunk) => {
  //   console.log("Chunk = ", chunk)
  // })


  
  const readStream = fs.createReadStream("file.txt");
  const writeStream = fs.createWriteStream("output.txt")
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modifiedChunk = chunk.toString().toUpperCase().replace(/ipsum/gi, "Vaibhav");
      callback(null, modifiedChunk);
    }
  })
  
  // Bad Way

  // readStream.on("data", (chunk) => {
  //  const modifiedChunk = chunk.toString().toUpperCase().replace(/ipsum/gi, "Vaibhav");
  //  writeStream.write(modifiedChunk); 
  // })


  // Good Way
  // readStream.pipe(transformStream).pipe(writeStream);
  pipeline(readStream, transformStream, writeStream, (err) => {console.error(err)});


  res.end()
})


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})