const express = require("express");
const db = require("./database/config");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const myQuery = "SELECT COUNT(*) AS count FROM users";
  db.query(myQuery, (err, results) => {
    if (err) {
      throw err;
    }
    const count = results[0].count;
    res.render("home", { count });
  });
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  db.query(`INSERT INTO users(email) VALUES('${email}')`, (err, results) => {
    if (err) {
      throw err;
    }
    res.redirect("/");
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
