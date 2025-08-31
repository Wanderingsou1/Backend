import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { json } from "stream/consumers";

const app = express();

app.use(express.json());

const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "data", "data.json");

const loadData = () => {
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return(JSON.parse(rawData));
};

const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};



// GET GET GET GET GET GET GET

app.get("/", (req, res) => {
  res.status(200).send("Hello from Express Server.");
});

app.get("/api/v1/users", (req, res) => {
  const { name } = req.query;

  let data = loadData();

  if (name) {
    const filteredData = data.filter((user) => {
      return user.name === name;
    });
    return res.status(200).send(filteredData);
  }

  res.status(200).send(data);
});

app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  let data = loadData();

  const user = data.find((user) => {
    return user.id === parsedId;
  });
  if (!user) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(user);
});

//   POST POST POST POST POST POST POST

app.post("/api/v1/users", (req, res) => {
  const { name, displayName } = req.body;

  let data = loadData();
  data = JSON.parse(data);

  const newUser = {
    id: data.length + 1,
    name,
    displayName,
  };

  data.push(newUser);
  saveData(data);

  res.status(201).send({
    message: "User created successfully",
    data: newUser,
  });
});



// PUT PUT PUT PUT PUT PUT PUT

app.put("/api/v1/users/:id", (req, res) => {
  const {
    body,
    params: {id},
  } = req;

  let data = loadData();
  data = JSON.parse(data);

  const parseId = parseInt(id);
  const userIndex = data.findIndex((user) => user.id === parseId);

  if(userIndex === -1) {
    return res.status(404).send("User not Found");
  }

  data[userIndex] = {
    id: parseId,
    ...body,
  }

  saveData(data);

  res.status(201).send({
    message: "User updated successfully",
    data: data[userIndex],
  })
})


// PATCH PATCH PATCH PATCH PATCH PATCH

app.patch("/api/v1/users/:id", (req, res) => {
  const {
    body,
    params: {id},
  } = req;

  let data = loadData();
  data = JSON.parse(data);

  const parseId = parseInt(id);
  const userIndex = data.findIndex((user) => user.id === parseId);

  if(userIndex === -1) {
    return res.status(404).send("User not Found");
  }

  data[userIndex] = {
    ...data[userIndex],
    ...body,
  }

  saveData(data);

  res.status(201).send({
    message: "User updated successfully",
    data: data[userIndex],
  })
})


// DELETE DELETE DELETE DELETE DELETE DELETE

app.delete("/api/v1/users/:id", (req, res) => {
  const userId = req.params.id;
  const parseId = parseInt(userId);

  let data = loadData();
  data = JSON.parse(data);

  const userIndex = data.findIndex((user) => user.id === parseId);

  if(userIndex === -1) {
    return res.status(404).send("User not Found");
  }

  const deletedUser = data[userIndex];
  data.splice(userIndex, 1);

  saveData(data);

  res.status(200).send({
    message: "User deleted successfully",
    data: deletedUser
  })
})





app.listen(PORT, (req, res) => {
  console.log("Server is running on port", PORT);
});
