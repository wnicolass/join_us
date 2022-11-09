const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my website");
  console.log("Someone requested us!");
});

app.get("/joke", (req, res) => {
  let joke = "What do you call a dog that does magic tricks? A labracadabrador";
  res.send(joke);
  console.log("requested the joke route");
});

app.get("/random_num", (req, res) => {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  res.send("Your lucky number is " + randomNum);
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
