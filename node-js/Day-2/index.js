const http = require("http")
const fs = require("fs")
const PORT  = 8080

const myServer = http.createServer((req, res) => {
  
  const log = `${Date.now()} & from ${req.url}: New Request Received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if(err) {
      console.error("Error writing to the log file", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    res.end("Hello world from server.");
  })

})


myServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})