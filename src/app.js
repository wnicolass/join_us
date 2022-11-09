const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my website");
  console.log("Someone requested us!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
