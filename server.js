import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("this is my first task");
});

app.get("/2", (req, res) => {
  res.send("sup guys , how its going ");
});

app.listen(9090, () => {
  console.log("the server is running smooth");
});
