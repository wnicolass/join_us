const express = require("express");
const app = express();
const db = require("./database/config");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  let myQuery = "SELECT COUNT(*) AS count FROM users";
  db.query(myQuery, (err, results) => {
    if (err) {
      throw err;
    }
    let count = results[0].count;
    // res.send(`We have ${count} users in our database`);
    res.render("home");
  });
});

app.get("/joke", (req, res) => {
  let joke =
    "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>";
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
