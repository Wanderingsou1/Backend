const EventEmitter = require("events");
const fs = require("fs");

const userEmitter = new EventEmitter();

const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profile_update: 0
}


const logFile = "./day-3/eventlog.json"

if(fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCounts), null, 2);
}


// Events Creation
userEmitter.on("login", (username) => {
  eventCounts.login++;
  console.log(`${username} logged in successfully.`);
  saveCounts();
})

userEmitter.on("logout", (username) => {
  eventCounts.logout++;
  console.log(`${username} logged out successfully.`);
  saveCounts();
})

userEmitter.on("purchase", (username, item) => {
  eventCounts.purchase++;
  console.log(`${username} purchased ${item}.`);
  saveCounts();
})

userEmitter.on("profile_update", (username, field) => {
  eventCounts.profile_update++;
  console.log(`${username} updated their ${field}.`);
  saveCounts();
})


userEmitter.on("summary", () => {
  console.log("\nEvent Summary: ");
  console.log(`Login Count: ${eventCounts.login}`);
  console.log(`Logout Count: ${eventCounts.logout}`);
  console.log(`Purchase Count: ${eventCounts.purchase}`);
  console.log(`Profile Update Count: ${eventCounts.profile_update}`);
})



// emit events with different arguments

userEmitter.emit("login", "Vaibhav");
userEmitter.emit("logout", "Vaibhav");
userEmitter.emit("purchase", "Vaibhav", "Laptop");
userEmitter.emit("profile_update", "Vaibhav", "name");

userEmitter.emit("summary");


