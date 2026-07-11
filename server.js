import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "this is my first task" });
});

app.get("/2", (req, res) => {
  res.json({ message: "sup guys , how its going" });
});

app.listen(9090, () => {
  console.log("the server is running smooth");
});
